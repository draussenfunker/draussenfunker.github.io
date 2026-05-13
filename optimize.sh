#!/bin/bash
set -euo pipefail
echo "running image optimization"

ROOT_DIR="./docs"
BATCH_SIZE=73

# Build a list of image files (skip "cache" directories)
file_list=$(mktemp)
find "$ROOT_DIR" \( -name cache -prune \) -o -type f -exec file {} \; \
  | awk -F: '{ if ($2 ~ /[Ii]mage|EPS/) print $1 }' > "$file_list"

# Process in batches using xargs; each invocation gets up to $BATCH_SIZE files
sparp_cli_cmd() {
  local batch_args=("$@")
  npx --yes sharp-cli resize 1200 \
    --withoutEnlargement true --optimise true --progressive true --withMetadata false --failOn none \
    --input "${batch_args[@]}" --output "{dir}/{base}"
}

export -f sparp_cli_cmd

# Use xargs to call a shell wrapper which forwards the args into xargs_cmd
# The "_" is the placeholder $0 so filenames become $1..$N inside the wrapper
xargs -r -n "$BATCH_SIZE" bash -c 'sparp_cli_cmd "$@"' _ < "$file_list"

# Cleanup
rm -f "$file_list"