const express = require("express");
const ejs = require('ejs');

const path = require("path");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootPath = require("./utils/pathUtil");

const port = 3001;
const app = express();
app.set('view engine','ejs')
app.set('views','views')

app.use(express.static("public"));
app.use(express.static(path.join(rootPath, "public")));
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  console.log("app running");
  next();
});

app.use(userRouter);
app.use("/host", hostRouter); // concatenating the path with /host
app.use((req, res) => {
  res.sendFile(path.join(rootPath, "views", "pageNot.html"));
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
