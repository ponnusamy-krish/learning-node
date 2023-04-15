const fs = require('fs');

const rs = fs.createReadStream('./startup.txt', {encoing: "utf-8"});

const ws = fs.createWriteStream('./neoStartup.txt');

rs.pipe(ws)