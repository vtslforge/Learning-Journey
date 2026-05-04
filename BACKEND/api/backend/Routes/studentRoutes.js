import express from "express";
import users from "../Database/db.js";

const router = express.Router();

router.get("/stu", (req, res) => {
  const name = req.query.name;
  const user = users.filter((u) => u.name === name);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
});

export default router;
