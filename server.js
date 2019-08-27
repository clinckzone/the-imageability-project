var express = require("express");
var server = express();

server.set('view engine', "pug");
server.set("PORT", process.env.port || 3000);

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
    data_a: "./average-duration/rectangular",
    data_b: "./average-duration/radial",
    data_c: "./average-duration/organic"
  })
});

server.get("/average-duration/rectangular", function(req,res) {
  res.render("visualization", {
    title: "Rectangular | Average Duration",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Average Duration",
    map_type: "Rectangular",
    script_file: "../sketch.js",
    points: "../points/rectangular.csv",
    type: "../type/duration.csv",
    image: "../rectangular.jpg"
  });
});

server.get("/average-duration/radial", function(req,res) {
  res.render("visualization", {
    title: "Radial | Average Duration",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Average Duration",
    map_type: "Radial",
    script_file: "../sketch.js",
    points: "../points/radial.csv",
    type: "../type/duration.csv",
    image: "../radial.jpg"
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
    data_a: "./number-of-fixations/rectangular",
    data_b: "./number-of-fixations/radial",
    data_c: "./number-of-fixations/organic"
  })
});

server.get("/number-of-fixations/rectangular", function(req,res) {
  res.render("visualization", {
    title: "Rectangular | Number of Fixations",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Fixations",
    map_type: "Rectangular",
    script_file: "../sketch.js",
    points: "../points/rectangular.csv",
    type: "../type/fixations.csv",
    image: "../rectangular.jpg",   
  });
});

server.get("/number-of-fixations/radial", function(req,res) {
  res.render("visualization", {
    title: "Radial | Number of Fixations",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Fixations",
    map_type: "Radial",
    script_file: "../sketch.js",
    points: "../points/radial.csv",
    type: "../type/fixations.csv",
    image: "../radial.jpg"
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
    data_a: "./number-of-visits/rectangular",
    data_b: "./number-of-visits/radial",
    data_c: "./number-of-visits/organic"
  })
});

server.get("/number-of-visits/rectangular", function(req,res) {
  res.render("visualization", {
    title: "Rectangular | Number of Visits",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Visits",
    map_type: "Rectangular",
    script_file: "../sketch.js",
    points: "../points/rectangular.csv",
    type: "../type/visits.csv",
    image: "../rectangular.jpg"  
  });
});

server.get("/number-of-visits/radial", function(req,res) {
  res.render("visualization", {
    title: "Radial | Number of Visits",
    name:  "../visualization.css",
    topic: "Imageability in Urban Fabric",
    sub_topic: "Number of Visits",
    map_type: "Radial",
    script_file: "../sketch.js",
    points: "../points/radial.csv",
    type: "../type/visits.csv",
    image: "../radial.jpg"
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


server.listen(3000, function() {
  console.log("Server is running on port 3000!");
});