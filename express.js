// "express.js"
// Dependencies
// =============================================================
var express = require("express");
// ! PATH IS A CORE MODULE IN NODE
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
// =============================================================
var reservations = [
  {
    name: "First Lastname",
    phone: "407-555-5555",
    email: "email@destination.com",
    uniqueID: 1
  },
  {
    name: "Firstname",
    phone: "407-555-6666",
    email: "email2@destination.com",
    uniqueID: 2
  },
  {
    name: "Lastname",
    phone: "407-555-7777",
    email: "email3@destination.com",
    uniqueID: 3
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  // res.send("Home Page")
  // ! "response.sendFile" WILL ALLOW US TO SEND A FILE INSTEAD OF HARDCODING HTML OR OTHER DATA
  // ! "path" IS A CORE NODE MODULE. WE ARE LETTING PATH BUILD OUR PATH FOR THE FILE TO BE SERVED.
  res.sendFile(path.join(__dirname, "home.html"));
});

// Displays all reservations
app.get("/reservations", function (req, res) {
  // ! SHOW RESERVATIONS & WAITLIST
  // * LOGIC THAT CAN BE USED IN THE JS ON THE PAGE...
  // * const lastReservation;
  // * if (reservations.length <= 4) {
  // *   lastReservation = reservations.length;
  // * }
  // * else { lastReservation = 4; }
  // * for (i = 0; i <= lastReservation; i++) {
  // *   return res.json(reservations[i]);
  // * }
  res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all waitlist
app.get("/waitlist", function (req, res) {
  // ! SHOW ONLY WAITLIST
  // * LOGIC THAT CAN BE USED IN THE JS ON THE PAGE...
  // * for (i = 5; i < reservations.length; i++) {
  // *   return res.json(reservations[i]);
  // * }
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

// Create New Reservation - takes in JSON input
app.post("/makereservation", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  reservations.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
