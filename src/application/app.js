/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {

	'use strict';
	
	/**
	 * @ngInject
	 */
	function MainAppController() {
		this.data = [140, 250, 12, 55, 90, 41, 30, 141];
	}

	angular.module('app', ['ui.router', 'angular.d3'])
		.controller('MainAppController', MainAppController);

})();