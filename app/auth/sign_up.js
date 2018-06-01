'use strict';

angular.module('urls.sign_up', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('sign_up', {
            url: '/sign_up',
            templateUrl: '/auth/sign_up.html',
            controller: 'SignUpCtrl'
        })
    }])
    .controller('SignUpCtrl', function ($auth, $scope, $state) {
        $scope.handleRegBtnClick = function () {

            var data = {
                'email': $scope.registrationForm.email.$modelValue,
                'password': $scope.registrationForm.password.$modelValue,
                'password_confirmation': $scope.registrationForm.password.$modelValue
            };
            $auth.submitRegistration(data)
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