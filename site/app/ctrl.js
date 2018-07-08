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
      mainSVC.getClass(classid)
      .then(function(result){
        console.log('scope: ' + $scope.class);
        $scope.class = result;
      });
    }

    var login = function(credentials){

    }

    getTopMenu();
    getClasses();
});

angular.module('discreetApp').controller('classCtrl', function($scope, $state, mainSVC){
  console.log('$scope: ', $scope, ' $state: ', $state);
  // mainSVC.getClass()
  //
  // .forEach(function(location){
  //   if(location.id==$state.params.id){
  //     $scope.bookedTrip = location;
  //   }
  // })
  //
  // $scope.bookedFrom = $state.params.from;
  // console.log('params:',$state.params);
})
