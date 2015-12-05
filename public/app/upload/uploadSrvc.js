angular.module("familyShare").service("uploadSrvc", function($http) {
	
	var service = {};
	
	service.storeFile = function(fileData, fileName) {
		var fileExtension = fileData.split(";")[0].split("/");
		fileExtension = fileExtension[fileExtension.length-1];
	
		var newFile = {
			fileName: fileName,
			fileBody: fileData,
			fileExtension: fileExtension,
			userEmail: "userEmail@e-mail.com"
		}
		
		return $http.post("/api/newFile", newFile);
	}
	return service;
	
});