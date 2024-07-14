#!/bin/bash

# Check if exactly one argument is provided
if [ "$#" -ne 1 ]; then
    # echo "Usage: $0 <folder_name> <email>"
    echo "Usage: $0 <folder_name>"
    exit 1
fi

# Get the folder name from the first argument
folder_name="$1"
# Get the email from the second argument
# email="$2"

# Move one level up
cd ..

# Find and archive the folder
tar -czf "${folder_name}.tar.gz" "${folder_name}"
# Sign the archive with GPG using the provided email
# gpg -e -r "${email}" "${folder_name}.tar.gz"
# Delete the original archive
# rm "${folder_name}.tar.gz"

# Move the signed file to the .backup folder
mkdir -p .backup
# mv "${folder_name}.tar.gz.gpg" .backup/
mv "${folder_name}.tar.gz" .backup/

echo "Archiving and processing of folder '${folder_name}' completed."
