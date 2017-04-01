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
      })
    }

    getTopMenu();
    getClasses();
})
