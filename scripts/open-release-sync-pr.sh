#!/usr/bin/env bash
# After semantic-release (without @semantic-release/git), commit version/changelog
# files to a branch and open a PR to main. Assigns the merged PR author when known.
set -euo pipefail

if [[ -z "$(git status --porcelain -- CHANGELOG.md package.json package-lock.json 2>/dev/null || true)" ]]; then
  echo "No release file changes; skipping PR."
  exit 0
fi

VERSION="$(node -p "require('./package.json').version")"
BRANCH="chore/release-sync-${VERSION}-${GITHUB_RUN_ID}"
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git checkout -b "$BRANCH"
git add CHANGELOG.md package.json package-lock.json
git commit -m "chore(release): ${VERSION} [skip ci]" -m "Sync repository after npm publish (see GitHub Releases)."
git push -u origin "$BRANCH"

ASSIGNEE="$(gh api "repos/${GITHUB_REPOSITORY}/commits/${GITHUB_SHA}/pulls" --jq '.[0].user.login // empty' 2>/dev/null || true)"
if [[ -z "$ASSIGNEE" ]]; then
  ASSIGNEE="${GITHUB_ACTOR}"
fi

BODY_FILE="$(mktemp)"
{
  echo "This PR updates \`package.json\`, \`package-lock.json\`, and \`CHANGELOG.md\` to match the version already published to npm."
  echo ""
  echo "Assigned to @${ASSIGNEE} (author of the merged PR for ${GITHUB_SHA}, or workflow actor if no linked PR)."
  echo ""
  echo "Merge when ready so \`main\` reflects the released version."
} >"$BODY_FILE"
trap 'rm -f "$BODY_FILE"' EXIT

if ! gh pr create \
  --base main \
  --head "$BRANCH" \
  --assignee "$ASSIGNEE" \
  --title "chore(release): sync ${VERSION} to main" \
  --body-file "$BODY_FILE"
then
  echo "PR create with assignee failed; retrying without --assignee."
  gh pr create \
    --base main \
    --head "$BRANCH" \
    --title "chore(release): sync ${VERSION} to main" \
    --body-file "$BODY_FILE"
fi
