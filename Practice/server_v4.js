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
  } else {
    invalidPathHandler(req, res);
  }
});
server.listen(3000, () => {
  console.log("Server is running at 3000");
});
