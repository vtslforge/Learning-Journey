const express = require("express");
const hostRouter = express.Router();
const { getAddHome,postAddHome} =  require('../controllers/homes')

// Shows the hotel-listing form at /host/add-hotel.
hostRouter.get("/add-hotel",getAddHome);
// Receives form data and delegates saving it to the controller.
hostRouter.post("/add-hotel",postAddHome );  

exports.hostRouter = hostRouter;
