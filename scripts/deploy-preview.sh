#!/usr/bin/env bash
# Build the site for the GitHub Pages preview and push it to the gh-pages branch.
# Requires the GitHub CLI to be logged in (gh auth status). Builds into
# dist-preview/ so the root build in dist/ (used by `astro preview`) is untouched.
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="mx-orsi/david-weis-website"
SITE_URL="https://mx-orsi.github.io"
SITE_BASE="/david-weis-website"
OUT="dist-preview"

rm -rf "$OUT"
SITE_URL="$SITE_URL" SITE_BASE="$SITE_BASE" npx astro build --outDir "$OUT"

git -C "$OUT" init -q -b gh-pages
git -C "$OUT" add -A
git -C "$OUT" -c user.name="deploy" -c user.email="deploy@users.noreply.github.com" \
  commit -qm "Deploy preview $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -C "$OUT" push -qf "https://x-access-token:$(gh auth token)@github.com/$REPO.git" gh-pages
rm -rf "$OUT/.git"

echo "Pushed. Preview: $SITE_URL$SITE_BASE/"
