'use strict';
angular.module('urls.modules.home', [])
    .controller('HomeController', homeController)
    .config(homeConfig);

homeConfig.$inject = ['$stateProvider'];

function homeConfig($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/modules/home/home.html',
        controller: 'HomeController',
        resolve: {
            auth: function ($auth, $state, Notification) {
                return $auth.validateUser().catch(function () {
                    // redirect unauthorized users to the login page
                    Notification.error('Please, authorize');
                    $state.go('sign_in');
                });
            }
        }
    })
}

homeController.$inject = ['$scope', '$auth', '$http', 'assets', '$state', 'Notification'];

function homeController($scope, $auth, $http, assets, $state, Notification) {

    $scope.sendUrls = function () {
        var data = {
            url: $scope.urlForm.url,
            short_url: $scope.urlForm.shortUrl
        };
        $http({
            url: assets.API_URL + '/urls/create.json',
            method: 'POST',
            data: JSON.stringify(data)
        }).then(function successCallback(res) {
            var url = assets.API_URL + '/' + res.data.message;
            $scope.short_url = url;
            Notification.success('Short url is created');
        }).catch(function errorCallback(err) {
            Notification.error(err.data.message);
        })
    };
}
