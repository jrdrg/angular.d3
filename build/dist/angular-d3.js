(function () {

	'use strict';

	angular.module('angular.d3', []);
})();
/// <reference path="../../typings/d3/d3.d.ts" />

(function() {
	
	'use strict';
	
	/**
	 * @ngInject
	 */
	function ChartContainerController($scope, $element, $attrs) {
		var svg = d3.select($element[0])
			.append('svg')
			.attr('width', '100%')
			.attr('height', '100%');
		
		svg.append('g');
		
		this.getContainer = function() { return svg; };
	}
	
	
	/**
	 * @description		The chart container directive
	 */
	function chartContainer() {
		return {
			restrict: 'AE',
			
			scope: {
				data: '='
			},
			
			controller: ChartContainerController
		};
	}
	
	angular.module('angular.d3')
		.directive('chartContainer', chartContainer);
	
})();
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