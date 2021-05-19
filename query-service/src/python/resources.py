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

class Data(Resource):
    def get(self, **kargs):
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]
            if 'key' in kargs:
                key = make_id(kargs['key'])
                res = col.find_one({'_id': key}, {'_id': 0})
                if res:
                    return jsonify(res)
                else:
                    raise KeyNotFound(str(key))
            else:
                data = request.get_json()
                res = list(col.find(data, {'_id': 1}))
                if res:
                    return jsonify(res)
                else:
                    raise NoDataMatch(data, kargs['db'], kargs['col'])
    
    def put(self, **kargs):
        start = time.time()
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
            end = time.time()
            print(end-start)
            return jsonify(data)
    
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
 
    def delete(self, **kargs):
        with make_cl() as cl:
            db = cl[kargs['db']]
            col = db[kargs['col']]
            if 'key' in kargs:
                key = make_id(kargs['key'])
                col.delete_one({'_id': key})
            else:
                db.drop_collection(col)