const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tableReservation = [];
const waitingList = [];

// {
// "customerName": "SuperDave",
// "phoneNumber": "1800awesome",
// "customerEmail": "dave.gmail.com",
// "customerID": "dave"
// },

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/favicon.ico", function(req, res) {
  res.sendFile(path.join(__dirname, "favicon.ico"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.post("/api/newRes", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);
  if (tableReservation.length < 5) {

  	tableReservation.push(newReservation);
  } else {
  	
  	waitingList.push(newReservation);
  }

  res.json(newReservation);
});

app.post("/api/tables", function(req, res){
	res.json(tableReservation);
});

app.post("/api/waiting", function(req, res){
	res.json(waitingList);
});

app.listen(PORT, function() {
  console.log("server started on PORT " + PORT);
});