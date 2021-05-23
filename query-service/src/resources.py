from flask import request, jsonify
from flask_restful import Resource

from pymongo import MongoClient, errors
from bson.objectid import ObjectId

from errors import DuplicateKeyError, BodyIsList, ListEntryNeedsID, InvalidKey, KeyNotFound, NoDataMatch

import os
import time

def make_id(key):
    try:
        return ObjectId(key)
    except:
        raise InvalidKey(key)

def make_cl():
    return MongoClient(os.environ['MONGO_URI'])

class DataImport(Resource):
    def post(self, **kargs):
        data = request.get_json()
        n = 0
        with make_cl() as cl:
            db = cl[kargs['db']]
            for k,v in data.items():
                col = db[k]
                if type(v) == list:
                    r = col.insert_many(v)
                    n += len(r.inserted_ids)
                else:
                    r = col.insert_one(v)
                    n += 1
        return jsonify({'inserted': n})

class DataPut(Resource):
    def post(self, **kargs):
        data = request.get_json()
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]

            if 'key' in kargs:
                key = make_id(kargs['key'])
                data = {'_id': key, **data}
                try:
                    col.insert_one(data)
                except errors.DuplicateKeyError:
                    raise DuplicateKeyError(kargs['key'])
            else:
                col.insert_one(data)
            return jsonify(data)

class DataDelete(Resource):
    def post(self, **kargs):
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]
            if 'key' in kargs:
                key = make_id(kargs['key'])
                col.delete_one({'_id': key})
            else:
                db.drop_collection(col)

class DataGet(Resource):
    def post(self, **kargs):
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]
            if 'key' in kargs:
                key = make_id(kargs['key'])
                res = col.find_one({'_id': key})
                if res:
                    return jsonify(res)
                else:
                    raise KeyNotFound(str(key))
            else:
                limit = kargs['limit']
                skip = kargs['skip']
                data = request.get_json()
                if limit == 0:
                    res = list(col.find(data, skip=skip))
                else:
                    res = list(col.find(data, limit=limit, skip=skip))
                if res:
                    return jsonify(res)
                else:
                    raise NoDataMatch(data, kargs['db'], kargs['col'])

class DataGetLastId(Resource):
    def post(self, **kargs):
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]
            res = list(col.find().sort({"id":-1}).limit(1))
            if res:
                return jsonify(res)
            else:
                raise NoDataMatch("", kargs['db'], kargs['col'])

class DataUpdate(Resource):
    def post(self, **kargs):
        data = request.get_json()
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]
            if 'key' in kargs:
                key = make_id(kargs['key'])
                if not col.update_one({'_id': key}, {'$set': data}).matched_count:
                    raise KeyNotFound(str(key))

            else:
                if not isinstance(data, list):
                    raise BodyIsList()
                for d in data:
                    if not '_id' in d:
                        raise ListEntryNeedsID(d)
                for d in data:
                    key = make_id(d['_id'])
                    search = {'_id': key}
                    del d['_id']
                    if not col.update_one(search, {'$set': d}).matched_count:
                        raise KeyNotFound(str(key))
        return jsonify(data)
