import express from "express";

const router = express.Router();

const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    role: "admin",
    active: true,
  },
  {
    id: 2,
    name: "Riya Verma",
    email: "riya.verma@example.com",
    role: "user",
    active: true,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.json(req.body);
});


export default router;
