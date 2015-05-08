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