const fs = require('fs');

const file = fs.readFileSync('withoutstream.csv','utf-8');
const line = file.trim('\n').split('\n');
line.shift()
console.log(line);