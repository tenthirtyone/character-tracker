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
      getRace: getRace,
      getRaces: getRaces,
      updateRace: updateRace
    };
   
    function addRace(race) {
      console.log('####')
      console.log(race)
      console.log('####')
      return $http.post('http://localhost:28469/api/race', race)
        .then(addRaceComplete)
        .catch(addRaceFailed);
      
        function addRaceComplete(response) {
            return response.data;
        }

        function addRaceFailed(error) {
            console.log('XHR Failed for addRace.' + error.data);
        }      
    }
    
    function deleteRace(raceid) {
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
        return $http.get(APIURL)
            .then(getRacesComplete)
            .catch(getRacesFailed);

        function getRacesComplete(response) {
            return response.data;
        }

        function getRacesFailed(error) {
            console.log('XHR Failed for getRaces.' + error.data);
        }
    }

  }
  
}());