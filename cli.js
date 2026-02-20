#!/usr/bin/env node
'use strict';

const { byEpsg, search } = require('./index.js');

const arg = process.argv[2];

if (!arg) {
    console.log(`Usages:
  $ projnames 3857
  WGS 84 / Pseudo-Mercator
  $ projnames "pseudo"
  3857
`);
    process.exit(0);
}

const code = parseInt(arg, 10);
if (!isNaN(code) && String(code) === arg) {
    console.log(byEpsg[code]);
} else {
    console.log(search(arg));
}
