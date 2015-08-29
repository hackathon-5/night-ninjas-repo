(function () {
  'use strict';

  angular
    .module('badActors')
    .controller('MainController', function ($scope, MainService, $rootScope, $location, $interval, $window) {

        $scope.demo = {};

        $scope.actors = MainService.getActors();
        $scope.viewActor = function(actor){
          $rootScope.actor = actor;
          $location.path('/movieView');
        }
        if($rootScope.actor === undefined) {
          $location.path('/');
        }
        if($location.path() === '/movieView'){


            var nameArray = $rootScope.actor.name.split(" ")
            MainService.getMovies(nameArray).then(function(data) {
              $scope.movies = data.data;
              var number = Math.floor(Math.random() * (data.data.length - 1));
              $scope.movie= data.data[number];
            })

        }
        $scope.newMovie = function(){
          if($scope.movies.length === 2){
            if($scope.movie.show_title === $scope.movies[0].show_title){
              var number = 1;
            }
            else{
              var number = 0;
            }
          }
          else if($scope.movies.length === 1){
            return alert("Only One Bad Movie Available");
          }
          else{
            do{
              var number = Math.floor(Math.random() * ($scope.movies.length - 1));
              
            }
            while($scope.movie.show_title === $scope.movies[number].show_title)
          }

          $scope.movie= $scope.movies[number];
        }
    })


    .directive('errSrc', function() {
      return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.errSrc) {
              attrs.$set('src', attrs.errSrc);
            }
          });
        }
    }
  });
})();
