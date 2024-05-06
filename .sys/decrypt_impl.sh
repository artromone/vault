#!/bin/bash

# Path to the encrypted file
encrypted_file="$1"
# GPG key for decryption
email="$2"

echo "${email}" "${encrypted_file}"

cd ../.backup

# Decrypt the file
gpg -d -o "${encrypted_file}" "${encrypted_file}.gpg"

# Extract the archive
tar -xvf "${encrypted_file}"

echo "The file '${encrypted_file}' has been successfully decrypted and extracted."
