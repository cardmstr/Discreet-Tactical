angular.module('discreetApp').directive('announcement', function(){
  return {
    templateUrl: './directives/announcement.tmpl.html',
    restrict: "E",
    replace: true,
    scope: true

  }
})
