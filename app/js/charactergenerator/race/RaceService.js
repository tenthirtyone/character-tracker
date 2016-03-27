(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .service('RaceService', RaceService);
  
  RaceService.$inject = ['$http'];
  
  function RaceService($http) {
    var APIURL = 'http://localhost:28469/api/race';
   
    return {
      getRace: getRace,
      getRaces: getRaces
    };
    
    function getRace() {
        return $http.get('http://localhost:28469/api/race')
            .then(getRaceComplete)
            .catch(getRaceFailed);

        function getRaceComplete(response) {
            return response.data;
        }

        function getRaceFailed(error) {
            console.log('XHR Failed for getRaces.' + error.data);
        }
    }

    function getRaces() {
        return $http.get('http://localhost:28469/api/races')
            .then(getRaceComplete)
            .catch(getRaceFailed);

        function getRaceComplete(response) {
            return response.data;
        }

        function getRaceFailed(error) {
            console.log('XHR Failed for getRaces.' + error.data);
        }
    }

  }
  
}());