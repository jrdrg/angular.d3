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

		var el = $element[0];

		var svg = d3.select(el)
			.append('svg')
			.attr('width', '100%')
			.attr('height', '100%');
		
		var chart = svg.append('g');
		
		this.getChart = function() { return chart; };
		this.getContainer = function() { return svg; };
		this.getData = function() { return $scope.data; };
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
// based on tutorial from http://bost.ocks.org/mike/bar/2/
(function() {
	
	'use strict';

	/**
	 * @ngInject
	 */
	function horizontalBars() {

		function onDataChanged(chart, args) {
			var data = args.data || [];
			var height = args.height || 1,
				width = args.width || 1;


			chart.selectAll('g').remove();

			var barHeight = 20;

			var xscale = d3.scale.linear()
				.domain([0, d3.max(data)])
				.range([0, width]);

			chart
				.attr('width', width)
				.attr('height', barHeight * data.length);

			var bar = chart.selectAll('g')
				.data(data)
				.enter().append('g')
				.attr('class', 'horizontal-bar')
				.attr('transform', function(val, idx) { return 'translate(0, ' + idx * barHeight + ')'; });

			bar.append('rect')
				.attr('width', xscale)
				.attr('height', barHeight - 1)
				.attr('width', 0)
			.transition()
				.delay(function(val, idx) { return idx * 20; })
				.attr('width', function(val, idx) { return xscale(val); });

			bar.append('text')
				.attr('x', function(val, idx) { return xscale(val) - 3; })
				.attr('y', barHeight / 2)
				.attr('dy', '0.35em')
				.text(function(val, idx) { return val; });

		}

		return {
			restrict: 'AE',
			require: '^chartContainer',

			scope: {
				x: '@?',	//TODO, right now just use a regular array
				y: '@?'
			},
			
			link: function (scope, elem, attrs, controller) {
				var chart = controller.getChart();	// <svg><g>


				scope.$watch(function() { return controller.getData(); }, function(newV, oldV) {
					var args = {
						data: newV,
						width: controller.getWidth(),
						height: controller.getHeight()
					};

					onDataChanged(chart, args);
					console.log('refresh data, horizontal bars');
				}, true);
			}
		};


		function getXAccessor() {
			return function(x) {

			};
		}

		function getYAccessor() {
			return function(y) {

			};
		}
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