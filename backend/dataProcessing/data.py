import pandas as pd

datas = {
    "methain": "backend/dataProcessing/Data/methain.txt",
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

    # create a DataFrame "table"
    df = pd.DataFrame(json_links, columns=["link"])

    # save this table in our dictionary
    tables[dataset_name] = df

print("\nTable for methain:")
print(tables["methain"])