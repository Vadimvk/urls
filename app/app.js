'use strict';

// Declare app level module which depends on views, and components
angular.module('urls', [
    'ui.router',
    'urls.modules',
    'urls.constants',
    'urls.directives',
    'ipCookie',
    'ng-token-auth',
    'ui-notification'])
    .config(urlsConfig)
    .run(urlsRuner);

urlsConfig.$inject = ['$locationProvider', '$stateProvider', '$authProvider', 'assets', 'NotificationProvider'];
function urlsConfig($locationProvider, $stateProvider, $authProvider, assets, NotificationProvider ) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('index', {
        url: '/',
        templateUrl: '/index.html',
        controller: 'AppCtrl',
        resolve: {
            auth: function ($auth, $state, Notification) {
                return $auth.validateUser().then(function () {
                    $state.go('home');
                }).catch(function () {
                    // redirect unauthorized users to the login page
                    Notification.error('Please, authorize');
                    $state.go('sign_in');
                });
            }
        }
    }).state('sign_in', {
        url: '/sign_in',
        templateUrl: 'modules/auth/sign_in.html',
        controller: 'AuthCtrl',
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
        controller: 'AuthCtrl',
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
    });
}

urlsRuner.$inject = ['$rootScope', '$state', 'Notification'];
function urlsRuner($rootScope, $state, Notification) {
    $rootScope.$on('auth:logout-success', function() {
        Notification.primary('Goodbye!');
        $state.go('sign_in');
    });
};

