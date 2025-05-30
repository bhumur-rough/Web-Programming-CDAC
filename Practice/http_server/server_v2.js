const http = require("http")

var server = http.createServer(function(req,res){
    if(req.url == "/xyz"){
        res.write("This is xyz path")
        res.end()
    } else if(req.url == "/abc"){
        res.write("This si abc path")
        res.end()
    }else{
        res.write("Invalid path")
        res.end()
    }
    
})
server.listen(3000,()=>{console.log("Server is running at 3000")})