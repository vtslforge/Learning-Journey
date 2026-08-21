const express = require("express");
const hostRouter = express.Router();
const { getAddHome,postAddHome} =  require('../controllers/homes')

//getAddHome from controllers which help to add home through html page
hostRouter.get("/add-hotel",getAddHome);
// postAddHome controller dealing with post request data and pushing into hotels array[]
hostRouter.post("/add-hotel",postAddHome );  

exports.hostRouter = hostRouter;
