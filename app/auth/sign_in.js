'use strict';

angular.module('urls.sign_in', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('sign_in', {
            url: '/sign_in',
            templateUrl: '/auth/sign_in.html',
            controller: 'SignInCtrl',
            resolve: {
                auth: function ($auth, $state) {
                    $auth.validateUser().then(function () {
                        $state.go('home');
                    });
                }
            }
        })
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