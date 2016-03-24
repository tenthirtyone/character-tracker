

(function() {
  'use strict';
  
  angular.module('GNAdmin.weapontypes')
  .service('WeaponTypesService', WeaponTypesService);
  
  WeaponTypesService.$inject = ['$http'];
  
  function WeaponTypesService($http) {
    var APIURL = 'http://localhost:28469/api/weapontypes';
   
    return {
      addWeaponType: addWeaponType,
      deleteWeaponType: deleteWeaponType,
      getWeaponTypes: getWeaponTypes,
      updateWeaponType: updateWeaponType
    };
   
    function addWeaponType(weapontype) {
      return $http.post('http://localhost:28469/api/weapontype', weapontype)
        .then(addWeaponTypeComplete)
        .catch(addWeaponTypeFailed);
      
        function addWeaponTypeComplete(response) {
            return response.data;
        }

        function addWeaponTypeFailed(error) {
            console.log('XHR Failed for addWeaponType.' + error.data);
        }      
    }
    
    function deleteWeaponType(weapontypeid) {
      return $http.delete('http://localhost:28469/api/weapontype', {params: {weapontypeid: weapontypeid}})
        .then(deleteWeaponTypeComplete)
        .catch(deleteWeaponTypeFailed);
      
        function deleteWeaponTypeComplete(response) {
            return response.data;
        }

        function deleteWeaponTypeFailed(error) {
            console.log('XHR Failed for deleteWeaponType.' + error.data);
        }      
    }
    
        
    function updateWeaponType(weapontype) {
        return $http.put('http://localhost:28469/api/weapontype', weapontype)
            .then(updateWeaponTypesComplete)
            .catch(updateWeaponTypesFailed);

        function updateWeaponTypesComplete(response) {
            return response.data;
        }

        function updateWeaponTypesFailed(error) {
            console.log('XHR Failed for updateWeaponTypes.' + error.data);
        }
    }
    
    
    function getWeaponTypes() {
        return $http.get(APIURL)
            .then(getWeaponTypesComplete)
            .catch(getWeaponTypesFailed);

        function getWeaponTypesComplete(response) {
            return response.data;
        }

        function getWeaponTypesFailed(error) {
            console.log('XHR Failed for getWeaponTypes.' + error.data);
        }
    }

  }
  
}());