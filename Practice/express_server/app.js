const express = require("express");
const app = express();

// app.delete() //delete
// app.patch()//patch 
// app.put() //put
// app.post()//post 

app.get("/abc",function(req,res){
    res.send("This is abc path")
})

app.get("/xyz",function(req,res){
    res.send("This is xyz path")
})

app.get("/", function (req, res) {
  res.send("Here we use send function not write and no need to use end()");
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
