import pandas as pd
import re

# Read the input CSV file
input_file = 'input.csv'  
output_real_file = 'real_records.csv'
output_fake_file = 'fake_records.csv'

# Load the CSV into a DataFrame
df = pd.read_csv(input_file)

# Function to check if a string contains only letters (A-Z)
def is_real(s):
    return bool(re.match('^(?:\")?[A-Za-z]{2,}', s))

# Filter the DataFrame to separate real and fake records
real_records = df[df['OrganizationName'].apply(is_real)]
fake_records = df[~df['OrganizationName'].apply(is_real)]

# Save the filtered DataFrames to new CSV files
real_records.to_csv(output_real_file, index=False)
fake_records.to_csv(output_fake_file, index=False)

print(f"Real records saved to {output_real_file}")
print(f"Fake records saved to {output_fake_file}")
