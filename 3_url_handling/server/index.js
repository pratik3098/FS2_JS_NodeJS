const express=require('express')
const path=require('path')
const port=8080
const app=express()

app.get('/',(req,res)=>{
    res.sendFile("index.html",{root: __dirname})
})
app.get('/university',(req,res)=>{
    res.sendFile("university.html",{root: __dirname})
})
app.get('/city',(req,res)=>{
    res.sendFile("city.html",{root: __dirname})
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`+'ok')
})