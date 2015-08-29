(function () {
  'use strict';

  angular
    .module('badActors')
    .factory('MainService', function ($http, $rootScope) {
        var getMovies = function(nameArray){
          console.log("nameArray: ", nameArray);
          var url = 'http://netflixroulette.net/api/api.php?actor=';
          if(nameArray.length === 3){
            url = url + nameArray[0] + '%20' + nameArray[1] + '%20' + nameArray[2];
          }
          if(nameArray.length === 2){
            url = url + nameArray[0] + '%20' + nameArray[1];
          }
          if(nameArray.length === 1){
            url = url + nameArray[0];
          }
          return $http.get(url);
        }

      return {
          getMovies: getMovies
        };
    })
})();
