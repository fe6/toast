cd docs
git init
git add -A
git commit -m 'docs($site): deploy site'
git push -f git@github.com:iq9891/toast.git master:gh-pages
