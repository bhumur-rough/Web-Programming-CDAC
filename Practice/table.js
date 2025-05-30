const fs = require("fs")
function table(x){
    function t(x,i) {
        if(i>10){
        return ;
        }
        fs.appendFile("table.txt",`${x} x ${i} = ${i*x}\n`, function(){
            t(x,i+1)
        });
    }
    fs.appendFile("table.txt",`\n\nTable of ${x} :- \n\n`,function(){})
    t(x,1)
}

const readLine = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

async function Tab() {
    return new Promise(resolve => {
        readLine.question("Enter Number : ", data => {
            resolve(data);
            readLine.close();
        })
    }) 
}

async function name() {
    let s = await Tab()
    table(Number(s))
    console.log(s)
    console.log("Shivansh")
}
name();

