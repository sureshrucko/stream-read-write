const fs = require('fs');
const readStream = fs.createReadStream('withstream.csv','utf-8')


readStream.on('data', (chunk) => {
    let chunkString = chunk.toString();
    chunkString = chunkString.split('\n');
    chunkString.shift();
    console.log(chunkString);
})