angular.module("familyShare").directive("uploadDir", function(uploadSrvc) {
	return {
		restrict: 'A',
      	link: function(scope, element, attrs) {
			  element.bind("change", function(changeEvent) {
				  var reader = new FileReader();
				  reader.onloadend = function(loadEvent) {
					 var fileread = loadEvent.target.result;
					 console.log(fileread);
					  
					 var tempArray = element["context"].value.split("\\");
			  		 var fileName = tempArray[tempArray.length - 1];
					 
					 uploadSrvc.storeFile(fileread, fileName).then(function(result) {
						 scope.files.unshift(result.data);
					 }).catch(function(err) {
						 console.error(err);
					 });
				  }
				  reader.readAsDataURL(changeEvent.target.files[0]);  
			  });
			
		  }
	}
});

