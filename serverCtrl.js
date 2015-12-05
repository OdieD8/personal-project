var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var keys = require("./keys");

AWS.config.update({
	accessKeyId: keys.amazonID,
	secretAccessKey: keys.amazonSecret,
	region: keys.amazonRegion
});

module.exports = {

	saveFile: function(req, res) {
		var buf = new Buffer(req.body.fileBody.replace(/^data:file\/\w+;base64,/, ""), "base64");
		
		var bucketName = "odwerks-family-share" + req.body.userEmail;
		var params = {
			Bucket: bucketName,
			Key: req.body.fileName,
			Body: buf,
			ContentType: "file/" + req.body.fileExtension,
			ACL: "public-read"
		};
		
		s3.upload(params, function(err, data) {
			if (err) return res.status(500).send(err);
			
			//save data to Mongo
			return res.json(data);
		})
	}
};