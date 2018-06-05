'use strict';
angular.module('urls.modules.home', [])
    .controller('HomeController', homeController)
    .config(homeConfig);

homeConfig.$inject = ['$stateProvider'];

function homeConfig($stateProvider) {
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
}

homeController.$inject = ['$scope', '$auth', '$http', 'constants', '$state'];

function homeController($scope, $auth, $http, constants, $state) {
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
            url: constants.API_URL + '/urls/create.json',
            method: 'POST',
            data: JSON.stringify(data)
        }).then(function successCallback(res) {
            var url = constants.API_URL + '/' + res.data.message;
            alert('Your short url - ' + url);
        }).catch(function errorCallback(err) {
            alert(err.data.message);
        })

    };

}
