const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
})

app.get("/aboutus", function(req, res){
    res.send("hi");
})

app.get("/Calculator", function(req, res){
    // console.log(__dirname) //Absolute directory path
    res.sendFile(__dirname+"/index.html");
})

app.post("/Calculator", function(req, res){
    res.send("thanks");
})

app.listen(3000, function(req, res){
    console.log( "Server is running at PORT 3000");
});