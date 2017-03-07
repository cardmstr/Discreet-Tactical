angular.module('discreetApp')
  .directive('login', function(){
    return {
      templateUrl: './directives/login.tmpl.html',
      restrict: "E",
      replace: true,
      scope: true
    }
  })
