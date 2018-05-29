'use strict';

angular.module('urls.home', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/home/home.html',
            controller: 'HomeInCtrl'
        })
    }])

    .controller('HomeInCtrl', function ($scope, $auth) {
        /*
        $scope.handleLoginBtnClick = function () {
            $auth.submitLogin($scope.loginForm)
                .then(function (resp) {
                    // handle success response
                })
                .catch(function (resp) {
                    // handle error response
                });
        };*/
    });