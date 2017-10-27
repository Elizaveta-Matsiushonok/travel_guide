var app = angular.model('myApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'index.html',
    controller  : 'MainController'
  })

  .when('/singin', {
    templateUrl : 'singin.html',
    controller  : 'MainController'
  })

  .when('/about', {
    templateUrl : 'index.html',
    controller  : 'MainController'
  })

  .otherwise({redirectTo: '/'});
});
