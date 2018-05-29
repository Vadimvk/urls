'use strict';

// Declare app level module which depends on views, and components
angular.module('urls', [
    'ui.router',
    'urls.sign_in',
    'urls.sign_up',
    'ipCookie',
    'ng-token-auth'
]).config(['$locationProvider', '$stateProvider', '$authProvider', function ($locationProvider, $stateProvider, $authProvider) {
    $locationProvider.html5Mode(true);


    $authProvider.configure({
        apiUrl: 'http://localhost:3000'
    })
}]);
