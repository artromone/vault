#!/bin/bash

# Check if exactly two arguments are provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <email>"
    exit 1
fi

# Get the email from the second argument
email="$1"

cd .sys

# Loop through each folder
folders=("01 - Atomics" "02 - Basket" "03 - Assets" "04 - Canvas" "06 - Reference")
for folder in "${folders[@]}"; do
    # Call decrypt_impl.sh for each folder
    bash decrypt_impl.sh "${folder}.tar.gz" "$email"
done

echo "Decryption and extraction completed for all folders."
