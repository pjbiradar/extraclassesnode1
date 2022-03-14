const express=require("express")

const app=express();
// const router=express.Router()
const middleware1=(req,res,next)=>{
    console.log("middleware1")
    next()
}
const middleware2=(req,res,next)=>{
    console.log("middleware2")
    next()
}
app.use(middleware1)
app.get('/user',(req,res)=>{
    res.send("user page")
})

app.get('/home',(req,res)=>{
    res.send("home page")
})


app.get('/contact',middleware2,(req,res)=>{
    res.send("contact page")
})
app.use(middleware2)
app.listen(8000,(req,res)=>{
    console.log("done");
})