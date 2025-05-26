let a = 0, b = 1;
let ans = `${a}, ${b}, `;
for(let i = 1;i<=98;i++){
    let c = a+b;
    ans += `${c}, `;
    a = b;
    b = c;
}
console.log(ans)