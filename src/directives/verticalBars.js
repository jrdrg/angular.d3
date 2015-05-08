(function () {

	'use strict';
	
	function onDataChanged() {
		
	}
	
	/**
	 * @ngInject
	 */
	function verticalBarChart() {
		return {
			restrict: 'AE',
			require: '^chartContainer',
			
			link: function(scope, elem, attrs, controller) {
				console.log('vertical bar');
			}
		};
	}
	
	angular.module('angular.d3')
		.directive('verticalBars', verticalBarChart);

})();