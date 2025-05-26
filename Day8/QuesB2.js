var fs = require("fs");
for(let i = 1 ;i < 11;i++){
    fs.appendFileSync("./QuesB2.txt",`3 x ${i} = ${3*i}\n`);
}