// "express.js"
// Dependencies
// =============================================================
var express = require("express");
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
  },p0
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
app.get("/view_table", function (req, res) {
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
  res.sendFile(path.join(__dirname, "view_table.html"));
});

app.get("/reservations_json", function (req, res) {
  return res.json(reservations);
});

// Create New Reservation - takes in JSON input
app.post("/make_reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "make_reservation.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
