const express = require("express");
const app = express();
const PORT = 3001;

// raw data to json data
app.use(express.json());

// app running
app.use((req, res, next) => {
  console.log("app running");
  next();
});

// use data
const userData = {
  name: "Aman singh",
  class: "6th",
};

app.get("/home/:id", (req, res) => {
  res.send(`hello from ${req.params.id}`);
});

app.use((req, res) => {
  res.json(userData);
});

// server running on port address
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
