angular.module('discreetApp').directive('topNav', function(){
  return {
    templateUrl: './directives/topNav.tmpl.html',
    restrict: "E",
    replace: true,
    scope: true

  }
})
