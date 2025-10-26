@echo off
echo Starting deployment...
cd /d "C:\Users\tylerdurden\Desktop\SoftVerse\Project\Soso"
echo Adding files...
git add .
echo Committing changes...
git commit -m "Update: logo2, opaque navbar, Inter font, mobile responsive, footer navigation"
echo Pushing to GitHub...
git push origin main --force
echo Deployment completed!
echo GitHub Actions will now build and deploy the site.
echo Check: https://github.com/korhankayali/caffesoso/actions
echo Site will be updated in 2-3 minutes at: https://korhankayali.github.io/caffesoso/
pause
