const fs = require("fs")
const input = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

input.question("Enter File name : ",function(data){
    fs.readFile(data,function(err,string){
        console.log(string.toString());
    })
    input.close()
})