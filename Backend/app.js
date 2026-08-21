const express = require("express");


const path = require("path");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootPath = require("./utils/pathUtil");
const { notFound } = require("./controllers/erros");

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
app.use(notFound);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
