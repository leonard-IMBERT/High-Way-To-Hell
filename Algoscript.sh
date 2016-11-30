#!/bin/bash
cat ./object/* ./game/* > compile.js
sed 's/const/var/' compile.js > compile.js
