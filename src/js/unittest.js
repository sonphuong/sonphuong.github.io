let UnitTestController = function($scope, $q, $controller){
    $scope.text = "text here"
}
UnitTestController.$inject = ['$scope', '$q', '$controller'];
app.controller('UnitTestController', UnitTestController);