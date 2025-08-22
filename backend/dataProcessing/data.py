import pandas as pd
import os

# Path of the folder where this script lives
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Add Data/ch4.xls inside that folder
ch4_file = os.path.join(BASE_DIR, "Data", "ch4.xls")
ch4_dict = pd.read_excel(ch4_file, sheet_name=None)

# Add Data/co2.xls inside that folder
co2_file = os.path.join(BASE_DIR, "Data", "co2.xls")
co2_dict = pd.read_excel(co2_file, sheet_name=None)

# Add Data/n2o.xls inside that folder
n2o_file = os.path.join(BASE_DIR, "Data", "n2o.xls")
n2o_dict = pd.read_excel(n2o_file, sheet_name=None)


CH4_2019 = ch4_dict["2019"]
CH4_2020 = ch4_dict["2020"]
CH4_2021 = ch4_dict["2021"]
CH4_2022 = ch4_dict["2022"]
CH4_2023 = ch4_dict["2023"]

CO2_2019 = co2_dict["2019"]
CO2_2020 = co2_dict["2020"]
CO2_2021 = co2_dict["2021"]
CO2_2022 = co2_dict["2022"]
CO2_2023 = co2_dict["2023"]

N2O_2019 = n2o_dict["2019"]
N2O_2020 = n2o_dict["2020"]
N2O_2021 = n2o_dict["2021"]
N2O_2022 = n2o_dict["2022"]
N2O_2023 = n2o_dict["2023"]


states = {
    "CO": "Colorado",
    "TX": "Texas",
    "KY": "Kentucky",
    "IN": "Indiana",
    "OK": "Oklahoma",
    "NY": "New York",
    "IL": "Illinois",
    "MN": "Minnesota",
    "AL": "Alabama",
    "WI": "Wisconsin",
    "AR": "Arkansas",
    "MO": "Missouri",
    "NC": "North Carolina",
    "MI": "Michigan",
    "WY": "Wyoming",
    "FL": "Florida",
    "PR": "Puerto Rico",
    "SD": "South Dakota",
    "MD": "Maryland",
    "IA": "Iowa",
    "LA": "Louisiana",
    "OH": "Ohio",
    "TN": "Tennessee",
    "GA": "Georgia",
    "VA": "Virginia",
    "CA": "California",
    "NE": "Nebraska",
    "WA": "Washington",
    "WV": "West Virginia",
    "KS": "Kansas",
    "ND": "North Dakota",
    "PA": "Pennsylvania",
    "MS": "Mississippi",
    "OR": "Oregon",
    "ID": "Idaho",
    "AK": "Alaska",
    "NM": "New Mexico",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "AZ": "Arizona",
    "NV": "Nevada",
    "SC": "South Carolina",
    "MT": "Montana",
    "UT": "Utah",
    "CT": "Connecticut",
    "MA": "Massachusetts",
    "HI": "Hawaii",
    "RI": "Rhode Island",
    "ME": "Maine",
    "DC": "District of Columbia",
    "DE": "Delaware",
    "GU": "Guam",
    "VI": "U.S. Virgin Islands",
    "VT": "Vermont",
}


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
        "parent_companies",
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
    # use try except to remove the errors
    for col in df.columns:
        df[col] = pd.to_numeric(df[col], errors="ignore")

    # 6. Strip whitespace from string columns
    for col in df.select_dtypes(include=["object"]).columns:
        df[col] = df[col].str.strip()

    return df
u
def merge_all_gases(data_dict: dict) -> dict[int, pd.DataFrame]:
    merged_by_year = {}

    # Loop over years (take from the first gas key)
    years = next(iter(data_dict.values())).keys()

    for year in years:
        frames = []
        # Loop over all gases
        for gas, yearly_data in data_dict.items():
            df = yearly_data[year].copy()
            df["gas"] = gas
            frames.append(df)

        # Merge all gases for that year
        merged_by_year[year] = pd.concat(frames, ignore_index=True)

    return merged_by_year


# print(DF2019)

CH4_2019_processed = data_processing_function(CH4_2019)
CH4_2020_processed = data_processing_function(CH4_2020)
CH4_2021_processed = data_processing_function(CH4_2021)
CH4_2022_processed = data_processing_function(CH4_2022)
CH4_2023_processed = data_processing_function(CH4_2023)

CO2_2019_processed = data_processing_function(CO2_2019)
CO2_2020_processed = data_processing_function(CO2_2020)
CO2_2021_processed = data_processing_function(CO2_2021)
CO2_2022_processed = data_processing_function(CO2_2022)
CO2_2023_processed = data_processing_function(CO2_2023)

N2O_2019_processed = data_processing_function(N2O_2019)
N2O_2020_processed = data_processing_function(N2O_2020)
N2O_2021_processed = data_processing_function(N2O_2021)
N2O_2022_processed = data_processing_function(N2O_2022)
N2O_2023_processed = data_processing_function(N2O_2023)

ch4_df = {
    2019: CH4_2019_processed,
    2020: CH4_2020_processed,
    2021: CH4_2021_processed,
    2022: CH4_2022_processed,
    2023: CH4_2023_processed,
}

co2_df = {
    2019: CO2_2019_processed,
    2020: CO2_2020_processed,
    2021: CO2_2021_processed,
    2022: CO2_2022_processed,
    2023: CO2_2023_processed,
}

n2o_df = {
    2019: N2O_2019_processed,
    2020: N2O_2020_processed,
    2021: N2O_2021_processed,
    2022: N2O_2022_processed,
    2023: N2O_2023_processed,
}


ml = {
    "CH4": ch4_df,
    "CO2": co2_df,
    "N2O": n2o_df,
}

total_info = merge_all_gases(ml)
