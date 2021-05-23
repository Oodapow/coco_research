from bson.objectid import ObjectId
import json

class Encoder(json.JSONEncoder):
	def default(self, obj):
		
		if isinstance(obj, ObjectId):
			return str(obj)

		return json.JSONEncoder.default(self, obj)
