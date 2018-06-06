angular.module('urls.directives.header', [])
    .directive('urlsHeader', urlsHeader);

urlsHeader.$inject = ['$http', '$rootScope', 'assets'];
function urlsHeader($http, $rootScope, assets) {

    return {
        templateUrl: assets.HEADER_PATH,
        replace: true,
        restrict: 'EAC',
        controllerAs: 'header'
    }


}