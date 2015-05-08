(function() {
	
	'use strict';
	
	/**
	 * @ngInject
	 */
	function horizontalBars() {
		return {
			restrict: 'AE',
			require: '^chartContainer',
			
			link: function (scope, elem, attrs, controller) {
				
			}
		};
	}
	
	angular.module('angular.d3')
		.directive('horizontalBars', horizontalBars);
	
})();