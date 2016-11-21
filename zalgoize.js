#!/usr/bin/env node

// see http://en.wikipedia.org/wiki/Combining_character
const chars = {
  a: '\u0363',
  e: '\u0364',
  i: '\u0365',
  o: '\u0366',
  u: '\u0367',
  c: '\u0368',
  d: '\u0369',
  h: '\u036a',
  m: '\u036b',
  r: '\u036c',
  t: '\u036d',
  v: '\u036e',
  x: '\u036f',
  g: '\u1ddb',
  k: '\u1ddc',
  l: '\u1ddd',
  n: '\u1de0',
  s: '\u1de4',
  f: '\u1de5',
  z: '\u1de6'
};

function zalgoize(s) {
  var c, out, z;
  out = s;
  for (c in chars) {
    if (!chars.hasOwnProperty(c)) continue;
    z = chars[c];
    out = out.replace(new RegExp(c, 'g'), z);
  }
  return out;
};

// CLI mode
if (!module.parent) {
  const process = require('process');
  const input = process.argv.slice(2).join(' ').split('').reverse().join('');
  const newlines = Math.floor(input.length / 3);
  console.log('\n'.repeat(newlines));
  console.log(zalgoize(input));
}
