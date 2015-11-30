angular.module("familyShare", ["ui.router"]).config(function($urlRouterProvider, $stateProvider) {
	
	$stateProvider
	.state("login", {
		url: "/login",
		templateUrl: "app/login/loginTmpl.html",
		controller: "loginCtrl"
	})
	.state("home", {
		url: "/home",
		templateUrl: "app/home/homeTmpl.html",
		controller: "homeCtrl"
	})
	.state("upload-storage", {
		url: "/upstore",
		templateUrl: "app/upload-storage/upstoreTmpl.html",
		controller: "upstoreCtrl"
	})
	.state("forum", {
		url: "/forum",
		templateUrl: "app/forum/forumTmpl.html",
		controller: "forumCtrl"
	})
	.state("chat", {
		url: "/chat",
		templateUrl: "app/chat/chatTmpl.html",
		controller: "chatCtrl"
	})
	$urlRouterProvider.otherwise("/home");
});