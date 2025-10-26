@echo off
echo Adding CNAME to gh-pages branch...
cd /d "C:\Users\tylerdurden\Desktop\SoftVerse\Project\Soso"

echo Step 1: Switching to gh-pages branch...
git checkout gh-pages

echo Step 2: Creating CNAME file...
echo caffesoso.com > CNAME

echo Step 3: Adding CNAME file...
git add CNAME

echo Step 4: Committing CNAME...
git commit -m "Add CNAME to gh-pages branch: caffesoso.com"

echo Step 5: Pushing to remote gh-pages...
git push origin gh-pages

echo Step 6: Switching back to main...
git checkout main

echo CNAME added to gh-pages branch successfully!
echo Now GitHub Pages will recognize caffesoso.com domain.
pause
