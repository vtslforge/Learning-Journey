import express from "express";
import { env } from "./config/api.js";
const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.send("health okiee");
});

app.post("/form", (_req, res) => {
  const { username } = _req.body;
  const { password } = _req.body;
  console.log(`username : ${username} password : ${password}`);
  res.send("Form submitted successfully");
});

app.listen(env.port, () => {
  console.log(`server running on port ${env.port}`);
});
