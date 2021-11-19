const express = require("express");
const app= express();

app.get("/",(req,res)=>{
    console.log("a test statement too");
    res.send("Hello world from vaibhav");
})

app.listen(3000, ()=>{
    console.log("app listening on port 3000");
});

module.exports = app;