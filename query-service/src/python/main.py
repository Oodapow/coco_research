from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from resources import DataUpdate, DataGet, DataDelete, DataPut, DataImport
from encoder import Encoder

import os

if __name__ == '__main__':
    app = Flask('query-service')
    CORS(app)
    api = Api(app)
        
    api.add_resource(DataPut,       '/data/put/<db>/<col>/<key>',       '/data/put/<db>/<col>')
    api.add_resource(DataGet,       '/data/get/<db>/<col>/<key>',       '/data/get/<db>/<col>/<int:limit>/<int:skip>')
    api.add_resource(DataUpdate,    '/data/update/<db>/<col>/<key>',    '/data/update/<db>/<col>')
    api.add_resource(DataDelete,    '/data/delete/<db>/<col>/<key>',    '/data/delete/<db>/<col>')
    api.add_resource(DataImport,    '/data/import/<db>')
    app.json_encoder = Encoder
    app.run(debug=True)