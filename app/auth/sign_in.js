'use strict';

angular.module('myApp.sign_in', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign_in', {
    templateUrl: 'auth/sign_in.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', [function() {

}]);