var express = require("express");
var session = require("express-session");
var keys = require("./keys");
var mongoose = require("mongoose");
var cors = require("cors");
var busboyBodyParser = require("busboy-body-parser");
                      
var app = express();
app.use(busboyBodyParser());
var corsOptions = {
    origin: "http://127.0.0.1:8080"
};
app.use(cors(corsOptions));
var db = mongo()

var mongoUri = "mongodb://localhost:27017/file-storage";
mongoose.connect(mongoUri);
mongoose.connection.once("open", function() {
    console.log("Connected to MongoDB at", mongoUri); 
});

var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;
var gridfs = new Grid(mongoose.connection.db);

//file-handlers
app.get("/upload-files/:filename", function(req, res) {
		var part = req.files.filefield;
		var writeStream = gridfs.createWriteStream({
			filename: part.name,
			mode: "w",
			content_type: part.mimetype
		});
		
		writeStream.on("close", function() {
			return res.status(200).send({
				message: "Success"
			});
		});
		
		writeStream.write(part.data);
		writeStream.end();
});

app.post("/upload-files", function(req, res) {
		console.log(req.body);
		gridfs.files.find({filename: req.params.filename }).toArray(function(err, files) {
			if(files.length === 0) {
				return res.status(400).send({
					message: "File not found"
				});
			}
			
			res.writeHead(200, {"Content-Type": files[0].contentType});
			
			var readstream = gridfs.createReadStream({
				filename: files[0].filename
			});
			
			readstream.on("data", function(data) {
				res.write(data);
			});
			
			readstream.on("end", function() {
				res.end();
			});
			
			readstream.on("error", function(err) {
				console.log("An error occurred!", err);
				throw err;
			});
		});
});



var port = 8800;
app.listen(8800, function() {
    console.log("listening on port:", port);
});