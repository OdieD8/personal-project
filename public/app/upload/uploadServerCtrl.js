// module.exports = {
// 	create: function(req, res) {
// 		var part = req.files.filefield;
// 		var writeStream = gridfs.createWriteStream({
// 			filename: part.name,
// 			mode: "w",
// 			content_type: part.mimetype
// 		});
		
// 		writeStream.on("close", function() {
// 			return res.status(200).send({
// 				message: "Success"
// 			});
// 		});
		
// 		writeStream.write(part.data);
// 		writeStream.end();
// 	},
	
// 	read: function(req, res) {
// 		gridfs.files.find({filename: req.params.filename }).toArray(function(err, files) {
// 		if(files.length === 0) {
// 			return res.status(400).send({
// 				message: "File not found"
// 			});
// 		}
		
// 		res.writeHead(200, {"Content-Type": files[0].contentType});
		
// 		var readstream = gridfs.createReadStream({
// 			filename: files[0].filename
// 		});
		
// 		readstream.on("data", function(data) {
// 			res.write(data);
// 		});
		
// 		readstream.on("end", function() {
// 			res.end();
// 		});
		
// 		readstream.on("error", function(err) {
// 			console.log("An error occurred!", err);
// 			throw err;
// 		});
// 		});
// 	}
// };