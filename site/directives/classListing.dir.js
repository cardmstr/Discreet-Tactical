angular.module('discreetApp').directive('classListing', function(){
  return {
    templateUrl: './directives/classListing.tmpl.html',
    restrict: "E",
    replace: true,
    scope: true

  }
})
