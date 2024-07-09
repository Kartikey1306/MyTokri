cd "C:/Users/mianh/Documents/INTERNSHALA/Landing-page-task" 
if [ ! -d ".git" ]; then
    git init
fi
git add .
git commit -m "Initial commit"
if ! git ls-remote --exit-code origin >/dev/null 2>&1; then
    git remote add origin https://github.com/Hamid6426/api-data-fetch.git
fi

git pull origin main --allow-unrelated-histories

if [ $? -ne 0 ]; then
    echo "Merge conflicts encountered. Resolve conflicts and commit."
    exit 1
fi

git push -u origin main
