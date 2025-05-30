const http = require("http")
const fs = require("fs")
const server = http.createServer(function(req, res){
    
    if(req.url == "/addition.html"){
        fs.readFile("addition.html",function(err,data){
            res.write(data.toString())
            res.end();
        })
    }else if(req.url == "/substraction.html"){
       fs.readFile("substraction.html",function(err,data){
            res.write(data.toString())
            res.end();
        })
    }else if(req.url == "/multiplication.html"){
       fs.readFile("multiplication.html",function(err,data){
            res.write(data.toString())
            res.end();
        })
    }else if(req.url == "/division.html"){
       fs.readFile("division.html",function(err,data){
            res.write(data.toString())
            res.end();
        })
    }
    else{
        res.write("Invalid path")
        res.end()
    }
})
server.listen(420,()=>{console.log("Server is running at 420")})