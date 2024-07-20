const app = require("express")()

//old way(alternative)
//const express = require("express")
//const app = expess()

app.get("/", (req,res) =>{

    res.json({
        message: "Here is the home page"
    })
})

app.get("/contact", (req,res)=>{
    //res.send("Here is my contact page")

    res.json({
        message: "This is the content of contact page"
    })
})

app.get("/about", (req,res)=>{
    res.json({
        message: "This is the about page"
    })
})

app.listen(2000, (req,res)=>{
    console.log("Node js has started at port 2000")
})