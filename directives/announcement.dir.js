var discApp = angular.module('discreetApp')

discApp.directive('announcement', function(){
  return {
    templateUrl: './directives/announcement.tmpl.html',
    restrict: "E",
    replace: true,
    scope: {
        message: "@",
        sref: "@"
    }
  }
})
