angular.module('discreetApp').controller('main-ctl',function($scope,mainSVC){
  var getTopMenu = function(){
    mainSVC.getTopMenu()
      .then(function(result){
        $scope.topMenu = result;
        console.log('scope topMenu', result);
      });
    }

    getTopMenu();
})
