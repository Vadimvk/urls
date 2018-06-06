angular.module('urls.directives.footer', [])
    .directive('urlsFooter', urlsFooter);

urlsFooter.$inject = ['$http', '$rootScope', 'assets'];
function urlsFooter($http, $rootScope, assets) {

    return {
        templateUrl: assets.FOOTER_PATH,
        replace: true,
        restrict: 'EAC',
        controllerAs: 'footer'
    }
}