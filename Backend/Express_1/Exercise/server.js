const express = require("express");
const app = express();
const port = 3001;

// exercise to get post message from /contact and console and display message its revieved

app.use(express.urlencoded({ extended: true })); // reads form data sent by a POST request and converts it into req.body

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use("/auth", (req, res, next) => {
  console.log("returning response");
  next();
});

app.get("/contact", (req, res) => {
  res.send(`
  <form method="POST" action="/contact">
    <input type="text" name="message" placeholder="Enter message">
    <button type="submit">Submit</button>
  </form>
`);
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("message recieved");
});

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`);
});
