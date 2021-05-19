from flask import Flask
from flask_restful import Api

from resources import Data
from encoder import Encoder

import os

if __name__ == '__main__':
    app = Flask('query-service')
    api = Api(app)
        
    api.add_resource(Data, '/data/<db>/<col>/<key>', '/data/<db>/<col>')
    app.json_encoder = Encoder
    app.run(debug=True)