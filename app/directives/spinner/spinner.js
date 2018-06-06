angular.module('urls.directives.spinner', [])

    .directive('urlsSpinner', ['$http', 'assets',function ($http, assets)
    {
        return {
            templateUrl: assets.SPINNER_PATH,
            controllerAs: 'spinner',
            replace: true,
            restrict: 'EAC',
            link: function (scope, elm)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };

    }]);