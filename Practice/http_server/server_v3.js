const http = require("http");
const fs = require("fs")

async function xyzHandler(req, res) {
  res.write("This is xyz path");
  res.end();
}

async function abcHandler(req, res) {
  res.write("This si abc path");
  res.end();
}

async function invalidPathHandler(req, res) {
  res.write("Invalid path");
  res.end();
}



var server = http.createServer(function (req, res) {
  if (req.url == "/xyz") {
    xyzHandler(req, res);
  } else if (req.url == "/abc") {
    abcHandler(req, res);
  }else if(req.url == "/index.html"){
    fs.readFile("index.html", function(err,data){
        if(err){
            invalidPathHandler(req,res)
        }else{
            res.write(data.toString())
             res.end()
        }
        
    })
  }else if(req.url == "/data.html"){
    fs.readFile("data.html", function(err,data){
        res.write(data.toString())
        res.end()
    })
  }else {
    invalidPathHandler(req, res);
  }
});
server.listen(3000, () => {
  console.log("Server is running at 3000");
});
