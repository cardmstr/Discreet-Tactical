angular.module('discreetApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: '/states/home.html'
      })
      .state('login',{
        url: '/login',
        templateUrl: '/states/login.html'
      })
      .state('about',{
        url: '/about',
        templateUrl: '/states/about.html'
      })


      $urlRouterProvider.otherwise('home');
  });
