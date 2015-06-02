(function(){
	console.log("Attached");

	var app = angular.module('rules', []);

	app.controller('rulesController', function($scope) {
		this.val = 'FIRST';
	});
})();