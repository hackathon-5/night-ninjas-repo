(function () {
  'use strict';

  angular
    .module('badActors', [
      'ngRoute',
      'ui.bootstrap',
      'ngAnimate',
      'ngMaterial'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })

        .when('/movieView',{
          templateUrl: 'views/movieView.html',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h2>Sorry, page not found</h2>'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
      angular
        .module('WOW', [])
        .factory('WOW', function ($window) {
          return $window._;
        });

})();
