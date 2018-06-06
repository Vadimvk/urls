angular.module('urls.modules.auth', [])
    .controller('AuthCtrl',  AuthCtrl)
;

AuthCtrl.$inject = ['$scope', '$state',  '$auth', '$rootScope', 'Notification'];
function AuthCtrl ($scope, $state, $auth, $rootScope, Notification){

    $scope.$on('auth:login-error', function(ev, reason) {
        Notification.error('Auth failed because ' + reason.errors[0]);
    });
    $scope.$on('auth:registration-email-success', function(ev, message) {
        Notification.success("A registration completed");
        $state.go('home');
    });
    $scope.$on('auth:login-success', function(ev, user) {
        Notification.success('Welcome ' + user.email);
        $state.go('home');
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
        Notification.error("Registration failed: " + reason.errors.full_messages);
    });
}
