var express = require("express");
var session = require("express-session");
var keys = require("./keys");
var mongoose = require("mongoose");
var files = require("./public/app/upload/files");
                   
var app = express();

app.use("/files", files);

var mongoUri = "mongodb://localhost:27017/file-storage";
mongoose.connect(mongoUri);
mongoose.connection.once("open", function() {
    console.log("Connected to MongoDB at", mongoUri); 
});





var port = 8800;
app.listen(8800, function() {
    console.log("listening on port:", port);
});