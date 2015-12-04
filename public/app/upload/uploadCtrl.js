angular.module("familyShare").controller("uploadCtrl", function($scope, $stateParams) {
	$scope.setFile = function(element) {
		$scope.$apply(function($scope) {
			$scope.file = element.files[0];
		});
	}
	
	$scope.submitForm = function() {
		var formData = new FormData();
		formData.append("UploadedFile", $scope.file);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8800/upload-files");
		xhr.send(formData);
	}
});