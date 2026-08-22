const express = require('express')
const userRouter = express.Router();
const {showHomes} = require('../controllers/homes')

// Shows the saved hotel listings on the application's home page.
userRouter.get("/",showHomes );

module.exports = userRouter;
