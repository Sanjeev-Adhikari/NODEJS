const app = require("express")()

//old way(alternative)
//const express = require("express")
//const app = expess()

app.get("/", (req,res) =>{

    res.send("Hello, Welcome to programming")
})

app.get("/contact", (req,res)=>{
    //res.send("Here is my contact page")

    res.json({
        message: "Here is the json format"
    })
})

app.get("/about", (req,res)=>{
    res.send("here is the about page")
})

app.listen(2000, (req,res)=>{
    console.log("Node js has started at port 2000")
})