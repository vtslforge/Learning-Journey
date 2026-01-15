import express from "express";
import employees from "./data.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());  
app.use(express.json());
app.use("/api/user-data", employees);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
