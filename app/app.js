'use strict';

// Declare app level module which depends on views, and components
angular.module('urls', [
    'ui.router',
    'urls.modules',
    'urls.constants',
    'urls.directives',
    'ipCookie',
    'ng-token-auth'
]).config(['$locationProvider', '$stateProvider', '$authProvider', 'assets',
    function ($locationProvider, $stateProvider, $authProvider, assets) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('index', {
            url: '/',
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
        }).state('sign_in', {
            url: '/sign_in',
            templateUrl: 'modules/auth/sign_in.html',
            controller: 'SignInCtrl',
            resolve: {
                auth: function ($auth, $state) {
                    $auth.validateUser().then(function () {
                        $state.go('home');
                    });
                }
            }
        }).state('sign_up', {
            url: '/sign_up',
            templateUrl: 'modules/auth/sign_up.html',
            controller: 'SignUpCtrl',
            resolve: {
                auth: function ($auth, $state) {
                    $auth.validateUser().then(function () {
                        $state.go('home');
                    });
                }
            }
        });
        $authProvider.configure({
            apiUrl: assets.API_URL
        })
    }]);
