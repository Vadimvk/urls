'use strict';

angular.module('myApp.sign_up', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign_up', {
    templateUrl: 'auth/sign_up.html',
    controller: 'SignUpCtrl'
  });
}])

.controller('SignUpCtrl', [function() {

}]);