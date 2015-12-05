var express = require("express");
var session = require("express-session");
var keys = require("./keys");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var controller = require("./serverCtrl");
                   
var app = express();

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

var mongooseUri = "mongodb://localhost:27017/file-storage";
mongoose.connect(mongooseUri);
mongoose.connection.once("open", function() {
    console.log("Connected to MongoDB at", mongooseUri); 
});

app.post("/api/newfile", controller.saveFile);


var port = 8800;
app.listen(8800, function() {
    console.log("listening on port:", port);
});