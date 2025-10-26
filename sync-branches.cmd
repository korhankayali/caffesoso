@echo off
echo Syncing main branch to gh-pages...
cd /d "C:\Users\tylerdurden\Desktop\SoftVerse\Project\Soso"

echo Step 1: Switching to main branch...
git checkout main

echo Step 2: Creating/switching to gh-pages branch...
git checkout -B gh-pages

echo Step 3: Merging main into gh-pages...
git merge main --allow-unrelated-histories

echo Step 4: Building the project...
npm run build

echo Step 5: Adding all files...
git add .

echo Step 6: Committing changes...
git commit -m "Sync gh-pages with main: logo2, opaque navbar, Inter font, mobile responsive"

echo Step 7: Force pushing to remote gh-pages...
git push origin gh-pages --force

echo Step 8: Switching back to main...
git checkout main

echo Sync completed! gh-pages branch updated with main branch content.
echo Site will be updated at: https://korhankayali.github.io/caffesoso/
pause
