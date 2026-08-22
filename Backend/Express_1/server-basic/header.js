const http = require('http')

// simple node
const server = http.createServer((req, res)=>{
    res.end("hello world")
    const url_data = console.log(req.method)
    res.end(url_data)
})

const PORT = 3001
server.listen(PORT,()=>{
    console.log(`Server running on the port: http://localhost:${PORT}`)
})