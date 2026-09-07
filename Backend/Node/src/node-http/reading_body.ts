import http, { type IncomingMessage, type ServerResponse } from "node:http";

const PORT = 3001;

type CreateUserBody = {
  name?: string;
  email?: string;
};

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    const requestURL = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathName = requestURL.pathname;
    res.setHeader("Content-Type", "text/plain");
    // post request
    if (method === "POST" && pathName === "/users") {
      //  This line creates an empty array that is specifically typed to store Buffer objects.
      const chunks: Buffer[] = [];

      // here data is event - event called data runs everytime node recieve chunk
      req.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      // this end event will run when full req body is arrived
      req.on("end", () => {
        try {
          // concat combine all the recieved chunks into one Buffer
          const rawBody = Buffer.concat(chunks).toString("utf-8");
          if (!rawBody) {
            res.statusCode = 400;
            res.end("request body is required");
            return;
          }
          // converts that JSON string → JavaScript object
          const body = JSON.parse(rawBody) as CreateUserBody;
          if (!body.email || !body.name) {
            // is email and name is not there
            res.statusCode = 400;
            res.end("name and email is required");
            return;
          }
          //if email and body is there
          res.statusCode = 201;
          res.end("user is now created");
        } catch (error) {
          res.statusCode = 400;
          res.end("invalid json body");
        }
      });
      return;
    }
    res.statusCode = 404;
    res.end("route not found");
  },
);

server.listen(PORT, () => {
  console.log("server running");
});
