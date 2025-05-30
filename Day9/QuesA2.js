const fs = require("fs")
const input = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})
 async function table(x) {
    let i=1;
    function tableRow(x, i){
        if(i>10){
            return ;
        }
        fs.appendFile("table.txt",`${x} x ${i} = ${i*x}\n`, function(){
            tableRow(x,i+1)
        });
    }
    fs.appendFile("table.txt",`\n\nTable of ${x} :- \n\n`,function(){})
    tableRow(x, 1)
 }

 input.question("Enter Number : ", function(data){
    table(data)
    input.close()
 })