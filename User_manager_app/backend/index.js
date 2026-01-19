import express from "express";
import emp from "./empRoutes.js";
import studb from './studentRoutes.js'
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());  
app.use(express.json());
app.use("/api/", studb );
app.use("/api/", emp );

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
