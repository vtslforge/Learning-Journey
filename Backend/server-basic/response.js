const http = require('http')

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type','text-html')  // specifying i am sending html
    res.write('<html>')
    res.write('<head><title> this is me sending html</title></head/>')
    res.write('<body> welcome to page sending through node</body>')
    res.write('</html>')
    res.end()

})

const PORT = 3001
server.listen(PORT,()=>{
    console.log(`Server running on the port: http://localhost:${PORT}`)
})