angular.module('urls.directives.header', [])
    .directive('urlsHeader', urlsHeader);

urlsHeader.$inject = ['$http', '$rootScope', 'assets'];
function urlsHeader($http, $rootScope, assets) {

    return {
        templateUrl: assets.HEADER_PATH,
        replace: true,
        restrict: 'EAC',
        controllerAs: 'header',
        controller: ['$scope', '$auth', '$state', function($scope, $auth, $state){

            /*$http.get('phrases/categories.json').then(function(res) {
                $scope.categories = res.data.data.categories;
                console.log($scope.categories);
            }).catch(function(err) {
                $state.go('home');

            });*/

        }]

    }


}