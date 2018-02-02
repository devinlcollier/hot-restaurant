var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var tableReservation = [];
var waitingList = [];

// {
// "customerName": "SuperDave",
// "phoneNumber": "1800awesome",
// "customerEmail": "dave.gmail.com",
// "customerID": "dave"
// },

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});


// Create New Characters - takes in JSON input
app.post("/api/newRes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);
  if (tableReservation.length < 5) {

  	tableReservation.push(newReservation);
  } else {
  	
  	waitingList.push(newReservation);
  }

  

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});