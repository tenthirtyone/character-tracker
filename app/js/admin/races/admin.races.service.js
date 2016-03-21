(function() {
  'use strict';
  
  angular.module('GNAdmin.races')
  .service('RacesService', RacesService);
  
  RacesService.$inject = ['$http'];
  
  function RacesService($http) {
    var APIURL = 'http://localhost:28469/api/races';
   
    return {
      addRace: addRace,
      deleteRace: deleteRace,
      getRaces: getRaces,
      updateRace: updateRace
    };
   
    function addRace(race) {
      return $http.post('http://localhost:28469/api/race', race)
        .then(addRaceComplete)
        .catch(addRaceFailed);
      
        function addRaceComplete(response) {
            console.log('test');
            console.log(response.data);
            return response.data;
        }

        function addRaceFailed(error) {
            console.log('XHR Failed for addRace.' + error.data);
        }      
    }
    
    function deleteRace(raceid) {
      console.log(raceid);
      return $http.delete('http://localhost:28469/api/race', {params: {raceid: raceid}})
        .then(deleteRaceComplete)
        .catch(deleteRaceFailed);
      
        function deleteRaceComplete(response) {
            return response.data;
        }

        function deleteRaceFailed(error) {
            console.log('XHR Failed for deleteRace.' + error.data);
        }      
    }
    
        
    function updateRace(race) {
        return $http.put('http://localhost:28469/api/race', race)
            .then(updateRacesComplete)
            .catch(updateRacesFailed);

        function updateRacesComplete(response) {
            return response.data;
        }

        function updateRacesFailed(error) {
            console.log('XHR Failed for updateRaces.' + error.data);
        }
    }
    
    
    function getRaces() {
        return $http.get(APIURL)
            .then(getRacesComplete)
            .catch(getRacesFailed);

        function getRacesComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getRacesFailed(error) {
            console.log('XHR Failed for getRaces.' + error.data);
        }
    }

  }
  
}());