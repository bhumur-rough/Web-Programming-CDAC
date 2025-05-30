const http = require("http")
const server = http.createServer(function(req, res){
    if(req.url == "/data"){
        res.write("this is data")
        res.end();
    }else if(req.url == "/profile"){
        res.write("this is profile")
        res.end();
    }
    else{
        res.write("Invalid path")
        res.end()
    }
})
server.listen(420,()=>{console.log("Server is running at 420")})