#!/bin/bash

# Get input from the command line
input="$(echo "$1" | xargs)"

# Convert input string to filename format
filename=$(echo "$input" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed 's/-$//')

# Create JavaScript file
echo -e "\n\n// Test\nconst testCases = [\n\t\n]\n\ntestCases.forEach(test => console.log( (test.input) === test.output) )" > "$filename.js"

# Open the file in VSCode
code "$filename.js"

# Start nodemon to watch and run the file
nodemon "$filename.js"
