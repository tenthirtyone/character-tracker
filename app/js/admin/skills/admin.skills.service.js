(function() {
  'use strict';
  
  angular.module('GNAdmin.skills')
  .service('SkillsService', SkillsService);
  
  SkillsService.$inject = ['$http'];
  
  function SkillsService($http) {
    var APIURL = 'http://localhost:28469/api/skills';
   
    return {
      getSkills: getSkills
    };
   
    
    function getSkills() {
        return $http.get(APIURL)
            .then(getSkillsComplete)
            .catch(getSkillsFailed);

        function getSkillsComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getSkillsFailed(error) {
            logger.error('XHR Failed for getSkills.' + error.data);
        }
    }

  }
  
}());