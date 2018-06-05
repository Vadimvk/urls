angular.module('urls.directives.msg', [])

    .directive('popUpMsg', popUpMsg);

popUpMsg.$inject = ['assets'];

function popUpMsg(assets){
    return {
        templateUrl: assets.MSG_PATH,
        restrict: 'E',
        scope: false,

        controller: function($scope) {
            $scope.closePopUp = function(){
                $scope.showPopUpMsg = false;
            }
        }
    }
}

