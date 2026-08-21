const hotels = [];

exports.getAddHome = (req, res) => {
  res.render("add-hotel");
};

exports.postAddHome = (req, res) => {
  hotels.push({
    name: req.body.homeName,
    price: req.body.homePrice,
    location: req.body.homeLocation,
  });
  res.render("success");
};

exports.showHomes = (req, res) => {
  res.render("home", { hotels });
};


