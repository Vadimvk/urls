'use strict';

angular.module('urls.home', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/home/home.html',
            controller: 'HomeInCtrl',
            resolve: {
                auth: function ($auth, $state) {
                    return $auth.validateUser().catch(function () {
                        // redirect unauthorized users to the login page
                        alert('Please, authorize');
                        $state.go('sign_in');
                    });
                }
            }
        })
    }])

    .controller('HomeInCtrl', function ($scope, $auth, $http) {
            $scope.handleSignOutBtnClick = function () {
                $auth.signOut()
                    .then(function (resp) {
                        alert('out');
                        $state.go('sign_in');
                        // handle success response
                    })
                    .catch(function (resp) {
                        // handle error response
                    });
            };

            $scope.sendUrls = function () {
                var data = {
                    url: $scope.urlForm.url,
                    short_url: $scope.urlForm.shortUrl
                };
                $http({
                    url: 'http://localhost:3000/urls/create.json',
                    method: 'POST',
                    dataType: 'json',
                    data: JSON.stringify(data),
                    success: function (res) {
                        console.log(res);
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });


            };

        }
    );