import pandas as pd
import os

BASE_DIR = os.path.dirname(__file__)  # directory where data.py is
datas = {
    "methain": os.path.join(BASE_DIR, "Data", "methain.txt"),
}

def convertDataToJson(file_path):
    try:
        with open(file_path, "r") as f:
            contents = f.readlines()
        return contents
    except Exception as e:
        print("Error", e)
        return []

# a dictionary to hold all tables
tables = {}

for dataset_name, file_path in datas.items():
    print(f"Processing {dataset_name} from {file_path}")
    links = convertDataToJson(file_path)

    # filter only lines with "json"
    json_links = [link.strip() for link in links if "json" in link]
    json = pd.read_json(json_links[0])


    dfs = []
    for url in json_links:
        try:
            print(f"Fetching {url} ...")
            df = pd.read_json(url)   # fetch JSON from URL
            dfs.append(df)
        except Exception as e:
            print(f"Error fetching {url}: {e}")

    if dfs:
        tables[dataset_name] = pd.concat(dfs, ignore_index=True)

print("\nTable for methain:")
print(tables.get("methain"))

file_path = f"output_tables/data.csv"
tables.to_csv(file_path, index=False)
