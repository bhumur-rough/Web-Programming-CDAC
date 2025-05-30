const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan('dev')) //logger
app.use(express.static("public")) // handle static files like html,css,js etc
app.use(express.urlencoded({extended: true})) // parses the urlencoded data
//For POST type access parsed data by req.body
//For GET type access parsed data by req.query

app.get("/add",function(req,res){
    let sum = Number(req.query.num1) + Number(req.query.num2)
    res.send("Sum is" + sum) // always return string
})


app.post("/addition",function(req,res){
    let sum = Number(req.body.num1) + Number(req.body.num2)
    res.send("Sum is" + sum) // always return string
})

app.get("/",function(req,res){
    res.send("Test api")
})

app.listen(3000,function(){console.log("Server is running at 3000")})