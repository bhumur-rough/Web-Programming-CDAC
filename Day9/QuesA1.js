const input = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

async function fibo(x){
    let a=0;
    let b=1
    let s = `${a}, ${b}, `
    for(let i=3; i<=x; i++){
        let c = a + b;
        s += `${c}, `
        a = b
        b = c
    }
    return s
}

input.question("Enter Number : ",function(data){
    fibo(data).then(res => console.log(res)).catch();
    input.close()
})