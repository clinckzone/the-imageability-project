var express = require("express");
var server = express();

server.set('view engine', "pug");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.use(express.static(__dirname + "/css"));
server.use(express.static(__dirname + "/images"));
server.use(express.static(__dirname + "/scripts"));
server.use(express.static(__dirname + "/data"));

server.get("/", function(req, res) {
  res.render("index", {
    title: "Home",
    name: "index.css",
    topic: "Imageability in Urban Fabric"
  });
});

//Average Duration
server.get("/average-duration", function(req, res) {
  res.render("category", {
    title: "Average Duration",
    name: "category.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Average Duration",
    data_a: "./average-duration/grid-iron",
    data_b: "./average-duration/ring-radial",
    data_c: "./average-duration/organic"
  })
});

server.get("/average-duration/grid-iron", function(req,res) {
  res.render("visualization", {
    title: "Grid Iron | Average Duration",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Average Duration",
    map_type: "Grid Iron",
    script_file: "../sketch.js",
    points: "../points/grid-iron.csv",
    type: "../type/duration.csv",
    image: "../grid-iron.jpg"
  });
});

server.get("/average-duration/ring-radial", function(req,res) {
  res.render("visualization", {
    title: "Ring Radial | Average Duration",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Average Duration",
    map_type: "Ring Radial",
    script_file: "../sketch.js",
    points: "../points/ring-radial.csv",
    type: "../type/duration.csv",
    image: "../ring-radial.jpg"
  });
});

server.get("/average-duration/organic", function(req,res) {
  res.render("visualization", {
    title: "Organic | Average Duration",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Average Duration",
    map_type: "Organic",
    script_file: "../sketch.js",
    points: "../points/organic.csv",
    type: "../type/duration.csv",
    image: "../organic.jpg",
  });
});

//Number of Fixations
server.get("/number-of-fixations", function(req, res) {
  res.render("category", {
    title: "Number of Fixations",
    name: "category.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Fixations",
    data_a: "./number-of-fixations/grid-iron",
    data_b: "./number-of-fixations/ring-radial",
    data_c: "./number-of-fixations/organic"
  })
});

server.get("/number-of-fixations/grid-iron", function(req,res) {
  res.render("visualization", {
    title: "Grid Iron | Number of Fixations",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Fixations",
    map_type: "Grid Iron",
    script_file: "../sketch.js",
    points: "../points/grid-iron.csv",
    type: "../type/fixations.csv",
    image: "../grid-iron.jpg",   
  });
});

server.get("/number-of-fixations/ring-radial", function(req,res) {
  res.render("visualization", {
    title: "Ring Radial | Number of Fixations",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Fixations",
    map_type: "Ring Radial",
    script_file: "../sketch.js",
    points: "../points/ring-radial.csv",
    type: "../type/fixations.csv",
    image: "../ring-radial.jpg"
  });
});

server.get("/number-of-fixations/organic", function(req,res) {
  res.render("visualization", {
    title: "Organic | Number of Fixations",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Fixations",
    map_type: "Organic",
    script_file: "../sketch.js",
    points: "../points/organic.csv",
    type: "../type/fixations.csv",
    image: "../organic.jpg"
  });
});

//Number of Visits
server.get("/number-of-visits", function(req, res) {
  res.render("category", {
    title: "Number of Visits",
    name: "category.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Visits",
    data_a: "./number-of-visits/grid-iron",
    data_b: "./number-of-visits/ring-radial",
    data_c: "./number-of-visits/organic"
  })
});

server.get("/number-of-visits/grid-iron", function(req,res) {
  res.render("visualization", {
    title: "Grid Iron | Number of Visits",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Visits",
    map_type: "Grid Iron",
    script_file: "../sketch.js",
    points: "../points/grid-iron.csv",
    type: "../type/visits.csv",
    image: "../grid-iron.jpg"  
  });
});

server.get("/number-of-visits/ring-radial", function(req,res) {
  res.render("visualization", {
    title: "Ring Radial | Number of Visits",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Visits",
    map_type: "Ring Radial",
    script_file: "../sketch.js",
    points: "../points/ring-radial.csv",
    type: "../type/visits.csv",
    image: "../ring-radial.jpg"
  });
});

server.get("/number-of-visits/organic", function(req,res) {
  res.render("visualization", {
    title: "Organic | Number of Visits",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Visits",
    map_type: "Organic",
    script_file: "../sketch.js",
    points: "../points/organic.csv",
    type: "../type/visits.csv",
    image: "../organic.jpg"
  });
});

server.listen(port, function() {
  console.log("Server is running on " +port);
});