angular.module('discreetApp').service('mainSVC', function($http){
  return {
    getTopMenu: function(){
      return $http.get('testData.json').then(function(results){
        return results.data["menu-items"];
      });
    }
  }
})
