angular.module('discreetApp').service('mainSVC', function($http){
  return {
    getTopMenu: function(){
      return $http.get('testData.json').then(function(results){
        console.log('svc testData results', results.data["menu-items"]);
        return results.data["menu-items"];
      });
    }
  }
})
