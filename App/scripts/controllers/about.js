'use strict';

/**
 * @ngdoc function
 * @name crudangularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crudangularJsApp
 */
angular.module('crudangularJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
