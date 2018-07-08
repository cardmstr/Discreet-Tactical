angular.module('discreetApp').service('mainSVC', function($http){
  return {
    getTopMenu: function(){
      return $http.get('testData.json').then(function(results){
        return results.data["menu-items"];
      });
    },
    getClasses: function(){
      return $http.get('/api/classes/').then(function(results){
        return results.data;
      })
    },
    getClass: function(classid){
      return $http.get('/api/classes/' + classid).then(function(results){
        return results.data;
      })
    }
  }
})
