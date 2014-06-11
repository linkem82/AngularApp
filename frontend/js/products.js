(function() {
	var app = angular.module('store-products',[]);

	app.directive('productPanel', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panel.html',
			controller: function() {
				this.tab = 1;
				this.selectTab = function(num) {
					this.tab = num;
				};
				this.isSelected = function(value) {
					return this.tab === value;
				};
			},
			controllerAs: 'panel'
		};
	});

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
})();