(function() {
  'use strict';
  
  angular.module('GNAdmin.abilityscores')
  .service('AbilityScoresService', AbilityScoresService);
  
  AbilityScoresService.$inject = ['$http'];
  
  function AbilityScoresService($http) {
       
    return {
      addAbilityScore: addAbilityScore,
      deleteAbilityScore: deleteAbilityScore,
      getAbilityScores: getAbilityScores,
      getAbilityScoresAbbr: getAbilityScoresAbbr,
      updateAbilityScore: updateAbilityScore
    };
   
    function addAbilityScore(abilityscore) {
      return $http.post('http://localhost:28469/api/abilityscore', abilityscore)
        .then(addAbilityScoreComplete)
        .catch(addAbilityScoreFailed);
      
        function addAbilityScoreComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function addAbilityScoreFailed(error) {
            console.log('XHR Failed for addAbilityScore.' + error.data);
        }      
    }
       
    function deleteAbilityScore(abilityscoreid) {
      console.log(abilityscoreid);
      return $http.delete('http://localhost:28469/api/abilityscore', {params: {abilityscoreid: abilityscoreid}})
        .then(deleteAbilityScoreComplete)
        .catch(deleteAbilityScoreFailed);
      
        function deleteAbilityScoreComplete(response) {
            return response.data;
        }

        function deleteAbilityScoreFailed(error) {
            console.log('XHR Failed for deleteAbilityScore.' + error.data);
        }      
    }
    
    function getAbilityScores() {
        return $http.get('http://localhost:28469/api/abilityscores')
            .then(getAbilityScoresComplete)
            .catch(getAbilityScoresFailed);

        function getAbilityScoresComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getAbilityScoresFailed(error) {
            console.log('XHR Failed for getAbilityScores.' + error.data);
        }
    }    
    
    function getAbilityScoresAbbr() {
        return $http.get('http://localhost:28469/api/abilityscoresabbr')
            .then(getAbilityScoresAbbrComplete)
            .catch(getAbilityScoresAbbrFailed);

        function getAbilityScoresAbbrComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getAbilityScoresAbbrFailed(error) {
            console.log('XHR Failed for getAbilityScoresAbbr.' + error.data);
        }
    }    
    


    function updateAbilityScore(abilityscore) {
        return $http.put('http://localhost:28469/api/abilityscore', abilityscore)
            .then(updateAbilityScoresComplete)
            .catch(updateAbilityScoresFailed);

        function updateAbilityScoresComplete(response) {
            return response.data;
        }

        function updateAbilityScoresFailed(error) {
            console.log('XHR Failed for updateAbilityScores.' + error.data);
        }
    }

  }
  
}());