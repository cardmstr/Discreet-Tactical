angular.module('discreetApp').controller('main-ctl',function($scope,mainSVC){
    var getTopMenu = function(){
      mainSVC.getTopMenu()
      .then(function(result){
        console.log('scope1: ' + $scope.topMenu);
        $scope.topMenu = result;
      });
    }

    var getClasses = function(){
      mainSVC.getClasses()
      .then(function(result){
        console.log('scope: ' + $scope.classes);
        $scope.classes = result;
      });
    }

    var getClass = function(classid){
      mainSVC.getClass(id)
      .then(function(result){
        console.log('scope: ' + $scope.class);
        $scope.class = result;
      });
    }

    getTopMenu();
    getClasses();
})
