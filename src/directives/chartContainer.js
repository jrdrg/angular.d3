/// <reference path="../../typings/d3/d3.d.ts" />

(function() {
	
	'use strict';
	
	/**
	 * @ngInject
	 */
	function ChartContainerController($scope, $element, $attrs) {

		var el = $element[0],
			data = $scope.data;

		var svg = d3.select(el)
			.append('svg')
			.attr('width', '100%')
			.attr('height', '100%');
		
		var chart = svg.append('g');
		
		this.getChart = function() { return chart; };
		this.getContainer = function() { return svg; };
		this.getData = function() { return data; };
		this.getHeight = function() { return el.offsetHeight; };
		this.getWidth = function() { return el.offsetWidth; };
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