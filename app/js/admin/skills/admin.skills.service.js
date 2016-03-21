(function() {
  'use strict';
  
  angular.module('GNAdmin.skills')
  .service('SkillsService', SkillsService);
  
  SkillsService.$inject = ['$http'];
  
  function SkillsService($http) {
    var APIURL = 'http://localhost:28469/api/skills';
   
    return {
      addSkill: addSkill,
      deleteSkill: deleteSkill,
      getSkills: getSkills,
      updateSkill: updateSkill
    };
   
    function addSkill(skill) {
      return $http.post('http://localhost:28469/api/skill', skill)
        .then(addSkillComplete)
        .catch(addSkillFailed);
      
        function addSkillComplete(response) {
            console.log('test');
            console.log(response.data);
            return response.data;
        }

        function addSkillFailed(error) {
            logger.error('XHR Failed for addSkill.' + error.data);
        }      
    }
    
    function deleteSkill(skillid) {
      console.log(skillid);
      return $http.delete('http://localhost:28469/api/skill', {params: {skillid: skillid}})
        .then(deleteSkillComplete)
        .catch(deleteSkillFailed);
      
        function deleteSkillComplete(response) {
            return response.data;
        }

        function deleteSkillFailed(error) {
            logger.error('XHR Failed for deleteSkill.' + error.data);
        }      
    }
    
        
    function updateSkill(skill) {
        return $http.put('http://localhost:28469/api/skill', skill)
            .then(updateSkillsComplete)
            .catch(updateSkillsFailed);

        function updateSkillsComplete(response) {
            return response.data;
        }

        function updateSkillsFailed(error) {
            logger.error('XHR Failed for updateSkills.' + error.data);
        }
    }
    
    
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