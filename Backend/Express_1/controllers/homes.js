const { getHomes, saveHome } = require("../models/home");

// Displays the form used to create a hotel listing.
const getAddHome = (req, res) => {
  res.render("add-hotel");
};

// Saves the submitted hotel details, then displays the registration confirmation.
const postAddHome = async (req, res, next) => {
  try {
    const { homeName, homePrice, homeLocation } = req.body;
    await saveHome(homeName, homePrice, homeLocation);
    res.render("success");
  } catch (error) {
    next(error);
  }
};

// Loads all saved hotels and passes them to the home-listing view.
const showHomes = async (req, res, next) => {
  try {
    const home = await getHomes();
    res.render("home", { home });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAddHome, postAddHome, showHomes };
