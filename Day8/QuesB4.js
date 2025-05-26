var fs = require("fs");
let s = fs.readFileSync("QuesB4_Read.txt")
let x = []
x = s.toString().split(",")
let sum = 0;
for(let i of x){
    sum+=Number(i);
}
fs.writeFileSync("QuesB4_Write.txt",`${sum}`)