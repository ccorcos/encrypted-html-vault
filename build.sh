#!/usr/bin/env bash

rm -rf dist
echo "Enter your password:"
read -s PASS
echo "Thanks"

HTML_PASSWORD=$PASS node --max-old-space-size=8192 ./node_modules/.bin/webpack -p
rm -f dist/main.js