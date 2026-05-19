import express from "express";
import studentRoutes from "./Routes/studentRoutes.js";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use("/api", studentRoutes);

const psqlConnection = async (res) => {
  const { Client } = pg;

  const cnn = new Client({
    host: "localhost",
    port: 5432,
    user: "vtsl",
    database: "vtsltest",
    password: "vtsl",
  });

  try {
    await cnn.connect();

    res.json({
      username: "yet another usernamess",
      password: "unknow",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Database connection failed",
    });

  } finally {
    await cnn.end();
  }
};

app.get("/psql", (req, res) => {
  psqlConnection(res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});