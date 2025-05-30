const http = require("http")
const fs = require("fs")
const server = http.createServer(function(req, res){
    
    if(req.url == "/data.html"){
        fs.readFile("data.html",function(err,data){
            res.write(data.toString())
            res.end();
        })
    }else if(req.url == "/profile.html"){
       fs.readFile("profile.html",function(err,data){
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