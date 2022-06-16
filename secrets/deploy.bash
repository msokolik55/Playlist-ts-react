git add -f frontend/dist && \
git commit -m "deploy: new site version" && \
git push origin --delete gh-pages && \
git subtree push --prefix=frontend/dist origin gh-pages