#!/bin/bash

# Check if exactly one argument is provided
if [ "$#" -ne 0 ]; then
    # echo "Usage: $0 <email>"
    echo "Usage: $0"
    exit 1
fi

# Get the email from the argument
email="$1"

# List of folders to process
folders=("00 - System" "01 - Atomics" "02 - Basket" "03 - Assets" "04 - Canvas" "06 - Reference")

# Loop through each folder
for folder in "${folders[@]}"; do
    # Call the original script with the folder name and the provided email
   # backup_impl.sh "$folder" "$email"
   sh backup_impl.sh "$folder"
done

echo "Processing completed for all folders."
