from flask.globals import request
import aiohttp
import asyncio
import requests
import tqdm
import json
import os

dataset_path = '../images/annotations_trainval2014/annotations'

datasets = os.listdir(dataset_path)


async def main():
    for path in datasets:
        filename = path.split('.')[0]
        filepath = os.path.join(dataset_path, path)
        with open(filepath, 'r') as f:
            data = json.load(f)

        print(data.keys())
        print([type(x) for x in data.values()])
        async with aiohttp.ClientSession() as session:
            for k in data.keys():
                if isinstance(data[k], list):
                    for de in tqdm.tqdm(data[k]):
                        async with session.put(f'http://localhost:5000/data/{filename}/{k}', json=de) as resp:
                            print("\nDone\n")
                else:
                    async with session.put(f'http://localhost:5000/data/{filename}/{k}', json=data[k]) as resp:
                        print("\nDone\n")


asyncio.run(main())
