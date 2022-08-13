//require express
const express = require("express")


//you have to write it -> app signifies -> your server
const app = express();

app.get("/sayHello", function(req, res){
    res.send("Hello from Server")
})

app.get("/sayBye", function(req, res){
    res.send("Bye from server")
})

app.listen(3000,function(){
    console.log("Server started at port 3000")
})

