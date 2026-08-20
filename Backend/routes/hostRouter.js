const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootPath = require('../utils/pathUtil')

hostRouter.get("/add-hotel", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "add-hotel.html"));
});

const homeData = []
hostRouter.post("/add-hotel", (req, res) => {
    homeData.push({homeData:req.body.houseName})
  res.sendFile(path.join(rootPath, "views", "success.html"));
});

exports.hostRouter = hostRouter
exports.homeData = homeData
