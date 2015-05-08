/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {

	'use strict';
	
	/**
	 * @ngInject
	 */
	function MainAppController() {
		var self = this;

		this.data = [140, 250, 12, 55, 90, 41, 30, 141];
		this.refreshData = function () {
			var data = [];
			for (var i = 0; i < (Math.random() * 15) + 5; i++) {
				var item = Math.round(Math.random() * 300);
				data.push(item);
			}
			self.data = data;
		}
	}

	angular.module('app', ['ui.router', 'angular.d3'])
		.controller('MainAppController', MainAppController);

})();