const http = require("http")

var server = http.createServer(function(req,res){
    res.write("Hi this out first server")
    res.end()
})
server.listen(3000,()=>{console.log("Server is running at 3000")})