'use strict';

angular.module('urls.modules.sign_in', ['ui.router'])

    .config(['$httpProvider',
        function($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
        }])

    .controller('SignInCtrl', function ($scope, $auth, $state) {
        $scope.handleLoginBtnClick = function () {
            $auth.submitLogin($scope.loginForm)
                .then(function (resp) {
                    alert('Success');
                    $state.go('home');
                })
                .catch(function (resp) {
                    alert('Error');
                    // handle error response
                });
        };
    });