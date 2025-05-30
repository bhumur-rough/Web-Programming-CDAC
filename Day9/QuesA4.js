const fs = require("fs")
const input = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

let array = []
let ans;
let infile;
let outfile;
async function inputFiles() {
    input.question("Enter Input File name : ",function(data){
        infile = data;
    })
}
async function outputFiles() {
    input.question("Enter Output File name : ",function(data){
        outfile = data;
        input.close()
    })
}

async function files() {
    await inputFiles();
    await outputFiles();
}
files()
fs.readFile(infile,function(err,str){
        array = str.toString().split(",");
        sum().then(data =>
            fs.writeFile(outfile,data,function(){})
        )
})

async function sum(){
    let result = 0
    for(let i of array){
        result += Number(i);
    }
    return result
}


