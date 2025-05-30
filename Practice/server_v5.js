const http = require("http");
const fs = require("fs/promises");

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

async function fileHandler(req, res, filename) {
  fs.readFile(filename)
    .then(function(data){
        res.write(data.toString())
        res.end()
    })
    .catch((err) => invalidPathHandler(req, res));
}

var server = http.createServer(function (req, res) {
  if (req.url == "/xyz") {
    xyzHandler(req, res);
  } else if (req.url == "/abc") {
    abcHandler(req, res);
  } else if (req.url == "/index.html") {
    fileHandler(req,res,"index.html")
  } else if (req.url == "/data.html") {
    fileHandler(req,res,"data.html")
  }else if( req.url.startsWith("/addition") && req.method == "GET"){
    //access urlencoded data, then calculate, then write res
    //To access data use URLSearchParams(//URL ENCODED STRING)
    let urlencodedStr = req.url.split("?")[1]
    let data = new URLSearchParams(urlencodedStr)
    // console.log(data)
    let sum = Number(data.get("num1")) + Number(data.get("num2")) 
    //res.writeHead(200,{"Content-type":"text/html"})
    res.write(`<h1>Sum is ${sum}</h1>`)
    res.end()
  }else {
    invalidPathHandler(req, res);
  }
});
server.listen(3000, () => {
  console.log("Server is running at 3000");
});
