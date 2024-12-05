#!/bin/bash
echo "running image optimization"
npx --yes sharp-cli resize 1200 --withoutEnlargement true --optimise true --progressive true --withMetadata false --failOn none --input $(find ./docs \( -name cache -prune \) -o -name '*' -type f -exec file {} \; | awk -F: '{ if ($2 ~/[Ii]mage|EPS/) print $1}') --output "{dir}/{base}"
