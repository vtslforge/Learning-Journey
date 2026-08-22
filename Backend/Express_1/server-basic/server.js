const http = require('http')

// simple node server
const server = http.createServer((req, res)=>{
    console.log(req)
    process.exit() // stop event loop
})

const PORT = 3001
server.listen(PORT,()=>{
    console.log(`Server running on the port: http://localhost:${PORT}`)
})