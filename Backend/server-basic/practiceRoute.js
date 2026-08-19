const http = require("http");

const PORT = 3001;

const pages = {
  "/": "Welcome to Home",
  "/men": "Welcome to Men",
  "/women": "Welcome to Women",
  "/kids": "Welcome to Kids",
  "/cart": "Welcome to Cart",
};

const server = http.createServer((req, res) => {
  const page = pages[req.url];

  if (!page) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    return res.end("<h1>404 - Page Not Found</h1>");
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Myntra</title>
            <style>
                body {
                    font-family: Arial;
                    margin: 0;
                }

                nav {
                    background: #222;
                    padding: 20px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-right: 30px;
                }

                main {
                    padding: 40px;
                }
            </style>
        </head>

        <body>

            <nav>
                <a href="/">Home</a>
                <a href="/men">Men</a>
                <a href="/women">Women</a>
                <a href="/kids">Kids</a>
                <a href="/cart">Cart</a>
            </nav>

            <main>
                <h1>${page}</h1>
            </main>

        </body>
        </html>
    `);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
