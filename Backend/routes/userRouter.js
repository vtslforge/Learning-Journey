const express = require('express')
const userRouter = express.Router();
const {showHomes} = require('../controllers/homes')

// showHomes controller used to route and render the home.html page
userRouter.get("/",showHomes );

module.exports = userRouter;