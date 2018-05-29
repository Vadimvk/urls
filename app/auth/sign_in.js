'use strict';

angular.module('urls.sign_in', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('sign_in', {
            url: '/sign_in',
            templateUrl: '/auth/sign_in.html',
            controller: 'SignInCtrl'
        })
    }])

    .controller('SignInCtrl', function ($scope, $auth) {
        $scope.handleLoginBtnClick = function () {
            $auth.submitLogin($scope.loginForm)
                .then(function (resp) {
                    // handle success response
                })
                .catch(function (resp) {
                    // handle error response
                });
        };
    });