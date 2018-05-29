'use strict';

angular.module('urls.sign_up', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('sign_up', {
            url: '/sign_up',
            templateUrl: '/auth/sign_up.html',
            controller: 'SignUpCtrl'
        })
    }])

    .controller('SignUpCtrl', function ($scope, $auth) {
        $scope.handleRegBtnClick = function () {
            $auth.submitRegistration($scope.registrationForm)
                .then(function (resp) {
                    debugger;
                    // handle success response
                })
                .catch(function (resp) {
                    // handle error response
                });
        };
    });