const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 302;
    res.write(`
        <html>
        <head <title>Calculator program</title></head>
        <body>
        <p>Welcome to calculator</p>
        <a href="/cal">Go to calculator</a>
        </body>
        </html>
        
`);
    return res.end();
  }

  if (req.url === "/cal") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 302;
    res.write(`
 <html>
        <body>
            <form action="/calculate-result" method="POST">
    <input type="number" name="num1" placeholder="First number">

    <input type="number" name="num2" placeholder="Second number">

    <button type="submit">Sum</button>
</form>
        </body>
    </html>
        
`);

    return res.end();
  }

  if (req.method === "POST" && req.url === "/calculate-result") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 302;
    res.write(`
 <html>
        <body>
            <h1> result will be shown here</h1>
        </body>
    </html>
        
`);
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on the port: http://localhost:${PORT}`);
});
