@echo off
echo Fixing homepage URL for custom domain...
cd /d "C:\Users\tylerdurden\Desktop\SoftVerse\Project\Soso"

echo Step 1: Adding changes...
git add .

echo Step 2: Committing homepage fix...
git commit -m "Fix homepage URL for custom domain: remove /caffesoso path"

echo Step 3: Pushing to main...
git push origin main

echo Homepage URL fixed! GitHub Actions will rebuild with correct paths.
echo Site will work at: https://caffesoso.com (without /caffesoso path)
pause
