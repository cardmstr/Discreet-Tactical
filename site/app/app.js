angular.module('discreetApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: '/states/home.html'
      })
      .state('login',{
        url: '/login',
        templateUrl: '/states/login.html'
      })
      .state('resources',{
        url: '/resources',
        templateUrl: '/states/resources.html'
      })
      .state('partners',{
        url: '/partners',
        templateUrl: '/states/partners.html'
      })
      .state('faq',{
        url: '/faq',
        templateUrl: '/states/faq.html'
      })
      .state('contact',{
        url: '/contact',
        templateUrl: '/states/contact.html'
      })
      .state('classes',{
        url: '/classes',
        templateUrl: '/states/classes.html'
      })

      // $locationProvider.html5Mode(true); //Gets rid of the # in the URL but causes issues if page is refreshed

      $urlRouterProvider.otherwise('home');
  });
