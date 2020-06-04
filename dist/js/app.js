'use strict';

/**
 * @author: phuongds
 */
let app = angular.module('app', ['ngRoute']);
app.config([
  '$routeProvider','$qProvider',
  function($routeProvider,$qProvider){
    $qProvider.errorOnUnhandledRejections(false);
    $routeProvider.when('/',{
      templateUrl : 'views/unittest.html',
      controller: 'UnitTestController'
    })
  }
]);

