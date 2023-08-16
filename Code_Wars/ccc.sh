#!/bin/bash

# Check if a filename is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: ccc <filename>"
  exit 1
fi

# Get the filename from the argument
filename="$1"

# Extract the base filename without extension
base_filename="$(basename "${filename%.js}")"

# Replace hyphens with spaces
commit_message="$(echo "$base_filename" | tr '-' ' ')"

# Commit the changes using Git
git add "$filename"
git commit -m "CodeWars - $commit_message"

# echo "Changes committed successfully!"