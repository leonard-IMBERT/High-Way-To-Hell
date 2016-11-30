#!/bin/bash
cat ./game/* ./object/* | sed 's/const/var/' > ./compile.js
echo 'Done'
