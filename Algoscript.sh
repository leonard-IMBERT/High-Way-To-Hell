#!/bin/bash
cat ./object/* ./blueprint/* ./game/LevelManager.js ./game/game.js ./game/Main.js | sed 's/const\ /var\ /' > ./compile/compile.js
echo 'Done'
