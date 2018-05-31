'use strict';

// Declare app level module which depends on views, and components
angular.module('urls', [
    'ui.router',
    'urls.home',
    'urls.sign_in',
    'urls.sign_up',
    'ipCookie',
    'ng-token-auth'
]).config(['$locationProvider', '$stateProvider', '$authProvider', 'constants',
    function ($locationProvider, $stateProvider, $authProvider, constants) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('index', {
            url: '',
            templateUrl: '/index.html',
            controller: 'AppCtrl',
            resolve: {
                auth: function ($auth, $state) {
                    return $auth.validateUser().then(function () {
                        $state.go('home');
                    }).catch(function () {
                        // redirect unauthorized users to the login page
                        $state.go('sign_in');
                    });
                }
            }
        });
        $authProvider.configure({
            apiUrl: constants.API_URL
        })
    }])
    .constant('constants', {
        API_URL: 'https://urls-api.herokuapp.com'
    });
