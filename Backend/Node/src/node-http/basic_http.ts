import  http,{type IncomingMessage, type ServerResponse }  from "node:http";

const PORT = 3000;

//  IncomingMessage  ServerResponse are TS types 
//  http.createServer gonna create low level http server
const server = http.createServer((req:IncomingMessage,res:ServerResponse) => {
    const method = req.method
    const url  = req.url // which path client is requesting
    const userAgent = req.headers["user-agent"] // extra info sending along with our req ex- content-type
    res.statusCode = 200 // set http status code 200 is succesfull
    res.setHeader('Content-Type','text/plain')
    res.end(`basic http server: ||| ${method} ||| ${url} |||  ${userAgent}`) // finish this paticular response
})

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})