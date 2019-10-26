try{
const http=require("http")
const url = require('url')
const port=80
const hostname='localhost'

const server= http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    let urlRequested= url.parse(req.url,true).query
    let date = new Date()
    let returnData= "Date: "+ date.toDateString()+"\n\n"
    res.write(returnData)
    returnData= "Url requested: " + "http://" + hostname + ":" + port + "/" 
    res.end(returnData)

})

server.listen(port, hostname,()=>{
    console.log(`http://${hostname}:${port}/`+'ok')
})
}
catch(err){
    console.error("Error:"+err)
}