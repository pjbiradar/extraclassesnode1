const express=require('express')
const app=express()

app.get("/home",((req,res)=>{
    const user=[{name:"pooja",age:40}];
    res.send(user)
    res.send("<h1>hii</h1>")
    res.send("hello world")
}))

app.listen(8000,(req,res)=>{
    console.log("done");
})