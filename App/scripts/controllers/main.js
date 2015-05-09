'use strict';

/**
 * @ngdoc function
 * @name crudangularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudangularJsApp
 */
angular.module('crudangularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
