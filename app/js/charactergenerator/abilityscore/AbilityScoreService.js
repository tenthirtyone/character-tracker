(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .service('AbilityScoreService', AbilityScoreService);
  
  AbilityScoreService.$inject = ['$http'];
  
  function AbilityScoreService($http) {
    var APIURL = 'http://localhost:28469/api/abilityscore';
   
    return {
      getAbilityScores: getAbilityScores      
    };
    
    function getAbilityScores() {
        return $http.get('http://localhost:28469/api/abilityscore')
            .then(getAbilityScoreComplete)
            .catch(getAbilityScoreFailed);

        function getAbilityScoreComplete(response) {
            return response.data;
        }

        function getAbilityScoreFailed(error) {
            console.log('XHR Failed for getAbilityScores.' + error.data);
        }
    }


  }
  
}());