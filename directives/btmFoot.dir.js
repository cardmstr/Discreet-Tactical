angular.module('discreetApp').directive('btmFoot', function(){
  return {
    templateUrl: './directives/btmFoot.tmpl.html',
    restrict: "E",
    replace: true,
    scope: true

  }
})
