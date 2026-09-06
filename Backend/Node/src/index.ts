import http, { type IncomingMessage, type ServerResponse } from "node:http";

const PORT = 3001;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    
    /* 

     /users -> Relative URL/path
    http://localhost:3000 ->	Base URL
    Result ->	"http://localhost:3000/users" 

    */
    const requestURL = new URL(req.url ?? "/", `http:${req.headers.host}`); // new URL(path, base)
    const pathName = requestURL.pathname;
    res.setHeader("Content-Type", "Text/plain");
    if (method === "GET" && pathName === "/health") {
      res.statusCode = 200;
      res.end("server is healty ");
      return;
    }
    if (method === "GET" && pathName === "/user") {
      res.statusCode = 201;
      res.end("List of usrs");
      return;
    }
    if (method === "POST" && pathName === "/user") {
      res.statusCode = 201;
      res.end("User created successfully!!!");
      return;
    }
    res.statusCode = 404;
    res.end("route not found");
  },
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
