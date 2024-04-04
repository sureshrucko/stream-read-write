const fs = require('fs');

const data = ['data,value'];
for(let i = 0;i < 10;i++) {
    data.push(`data${i}, value${i}`);
    console.log(data);
}
fs.writeFileSync('withoutstream.csv',data.join('\n'));