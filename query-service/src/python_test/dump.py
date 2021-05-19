from flask.globals import request
import requests
import tqdm
import json
import os

dataset_path = 'C:/Users/Alexandru/Downloads/annotations_trainval2014/annotations/'

datasets = os.listdir(dataset_path)

for path in datasets:
    filename = path.split('.')[0]
    filepath = os.path.join(dataset_path, path)
    with open(filepath, 'r') as f:
        data = json.load(f)

    print(data.keys())
    print([type(x) for x in data.values()])
    for k in data.keys():
        if isinstance(data[k], list):
            for de in tqdm.tqdm(data[k]):
                requests.put(f'http://localhost:5000/data/{filename}/{k}', json=de)
        else:
            requests.put(f'http://localhost:5000/data/{filename}/{k}', json=data[k])