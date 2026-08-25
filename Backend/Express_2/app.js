const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3001;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Home page
app.get("/", (req, res) => {

    fs.readFile("./data/hotels.json", "utf-8", (err, data) => {

        if (err) {
            return res.status(500).send("Error reading hotels");
        }

        const hotelData = JSON.parse(data);

        res.render("home", { hotelData });
    });

});


// Auth page
app.get("/auth", (req, res) => {
    res.render("auth");
});


// Add hotel
app.post("/auth", (req, res) => {

    const { hotelName, location, price, rating } = req.body;

    fs.readFile("./data/hotels.json", "utf-8", (err, data) => {

        if (err) {
            return res.status(500).send("Error reading hotels");
        }

        const hotels = JSON.parse(data);

        hotels.push({
            hotelName,
            location,
            price,
            rating
        });

        fs.writeFile(
            "./data/hotels.json",
            JSON.stringify(hotels, null, 2),
            (err) => {

                if (err) {
                    return res.status(500).send("Error saving hotel");
                }

                res.render("success");
            }
        );

    });

});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});