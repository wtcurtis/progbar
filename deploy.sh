#!/bin/bash
dir=${1%/}
cp progbar.html $1
cp css/css3-progress-bar.css $1/css
cp js/progbar.js $1/js

chmod 664 $1/progbar.html
chmod 664 $1/css/css3-progress-bar.css
chmod 664 $1/js/progbar.js
