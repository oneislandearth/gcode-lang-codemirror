#!/bin/bash
npx="./node_modules/.bin"
$npx/lezer-generator src/gcode.grammar -o src/language/gcode
$npx/esbuild src/*.js src/*/*.js* --minify --format=esm --outdir=dist/