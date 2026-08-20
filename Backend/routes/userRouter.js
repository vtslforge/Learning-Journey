const express = require('express')
const userRouter = express.Router();
const path  = require('path')
const rootPath = require('../utils/pathUtil');
const { homeData, hostRouter } = require('./hostRouter');

userRouter.get("/", (req, res) => {
    console.log(hostRouter)
    // res.sendFile(path.join(rootPath,'views',"home.html"))
    res.render('home',{homeData})
});

module.exports = userRouter;