var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{


   $routeProvider

   .when('/', {
            templateUrl : 'app/views/home.html',
            controller  : 'homeController'
   })

   .when('/adicionar', {
      templateUrl : 'app/views/adicionar.html',
      controller  : 'AdicionarCtrl'
   })

   .when('/lista', {
      templateUrl : 'app/views/lista.html',
      controller  : 'ListaCtrl'
   })

   .when('/sobre', {
      templateUrl : 'app/views/sobre.html',
      controller  : 'SobreCtrl'
   })

   .otherwise ({ redirectTo: '/' });
});
