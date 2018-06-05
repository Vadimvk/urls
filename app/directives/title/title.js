angular.module('urls.directives.title', [])
    .directive('urlsTitle', urlsTitle);

urlsTitle.$inject = ['$http', '$rootScope', 'assets'];
function urlsTitle($http, $rootScope, assets) {

    return {
        // templateUrl: assets.TITLE_PATH,
        templateUrl: 'angular/directives/title/title.html',
        replace: true,
        restrict: 'EAC',
        controllerAs: 'title'

    }


}
