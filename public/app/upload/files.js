var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.send("Files Route");
});

router.get("/upload", function(req, res) {
	res.sendFile(__dirname + "/uploadTmpl.html")
})

router.post("/upload", function(req,res) {
	var multiparty = require("multiparty");
	var form = new multiparty.Form();
	
	form.parse(req, function(err, fields, files) {
		var files = files.files[0];
		var fs = require("fs");
		
		fs.readFile(files.path, function(err, data) {
			var path="./public/app/upload/uploadedFiles/" + files.originalFilename;
					
			fs.writeFile(path, data, function(err) {
				if(err) console.log(err);
				res.send("Upload Successful");
			});
		});
	});
});

module.exports = router;