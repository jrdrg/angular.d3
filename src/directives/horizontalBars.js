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