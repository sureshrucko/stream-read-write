const fs = require('fs');
(async () => {
    const writeStream = fs.createWriteStream('withstream.csv');
    for(let i = 0; i < 1000000; i++){
        const overFlowMark = writeStream.write(`data${i},value${i}\n`);
        if(!overFlowMark) {
            await new Promise((resolve) =>
                writeStream.once('drain',resolve)
            )
        }
    }
    writeStream.end();
})();