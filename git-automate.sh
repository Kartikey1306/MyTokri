#!/bin/bash

# Replace with the correct path to your project directory
cd "C:/Users/mianh/Documents/INTERNSHALA/Landing-page-task" 

# Initialize Git repository if not already initialized
if [ ! -d ".git" ]; then
    git init
fi

# Add all files to staging area
git add .

# Commit changes
git commit -m "Initial commit"

# Check if remote origin already exists
if ! git ls-remote --exit-code origin >/dev/null 2>&1; then
    # Set remote origin (replace <your-github-username> with your GitHub username)
    git remote add origin https://github.com/Hamid6426/api-data-fetch.git
fi

# Pull changes from remote (including all branches and allow unrelated histories)
git pull origin main --allow-unrelated-histories

# Check if there are any merge conflicts
if [ $? -ne 0 ]; then
    echo "Merge conflicts encountered. Resolve conflicts and commit."
    exit 1
fi

# Push changes to GitHub
git push -u origin main
