const express=require('express')
const port=8080
const app=express()
let data = { firstName: 'John', lastName: 'Snow', email: 'abcd@gmail.com', address: 'Casa Loma, Toronto, ON', phone: '99999999999', verified: 'yes' };
app.get('/',(req,res)=>{
    res.end(JSON.stringify(data))
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})