#!/bin/bash
mkdir -p flatten
for FILE in ./contracts/*.sol; do
    file_name=$(basename "$FILE")
    echo $file_name
    npx hardhat flatten $FILE > "./flatten/${file_name%.*}.txt"
done
cd ./scripts
python clean_licenses.py