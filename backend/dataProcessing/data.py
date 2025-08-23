import pandas as pd
import os

# Path of the folder where this script lives
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Add Data/flight.xls inside that folder
file_path = os.path.join(BASE_DIR, "Data", "flight.xls")

sheet_dict = pd.read_excel(file_path, sheet_name=None)

DF2019 = sheet_dict[-4]
DF2020 = sheet_dict["2020"]
DF2021 = sheet_dict["2021"]
DF2022 = sheet_dict["2022"]
DF2023 = sheet_dict["2023"]

print(DF2019)

def data_processing_function(data: pd.DataFrame) -> pd.DataFrame:
    df = data.copy()

    # Columns to drop
    drop_cols = [
        "facility_name",
        "ghgrp_id",
        "reported_address",
        "county_name",
        "zip_code",
        "subparts",
    ]

    # 1. Normalize column names first
    df.columns = (
        df.columns.str.strip()  # remove spaces around names
        .str.lower()  # lowercase
        .str.replace(" ", "_")  # replace spaces with underscores
    )

    # 2. Drop unnecessary columns
    df = df.drop(columns=drop_cols, errors="ignore")

    # 3. Remove duplicates
    df = df.drop_duplicates()

    # 4. Handle missing values
    df = df.dropna(how="all")  # drop rows fully empty
    df = df.fillna("")  # replace remaining NaN with empty string

    # 5. Try converting columns to numeric where possible
    for col in df.columns:
        df[col] = pd.to_numeric(df[col], errors="ignore")

    # 6. Strip whitespace from string columns
    for col in df.select_dtypes(include=["object"]).columns:
        df[col] = df[col].str.strip()

    return df


DF2019_processed = data_processing_function(DF2019)
DF2020_processed = data_processing_function(DF2020)
DF2021_processed = data_processing_function(DF2021)
DF2022_processed = data_processing_function(DF2022)
DF2023_processed = data_processing_function(DF2023)

df = {

    2019:DF2019_processed,
    2020:DF2020_processed,
    2021:DF2021_processed,
    2022:DF2022_processed,
    2023:DF2023_processed,
}
