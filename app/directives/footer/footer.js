angular.module('urls.directives.footer', [])
    .directive('urlsFooter', urlsFooter);

urlsFooter.$inject = ['$http', '$rootScope', 'assets'];
function urlsFooter($http, $rootScope, assets) {

    return {
        templateUrl: assets.FOOTER_PATH,
        // templateUrl: 'angular/directives/footer/footer.html',
        replace: true,
        restrict: 'EAC',
        controllerAs: 'footer'
    }
}