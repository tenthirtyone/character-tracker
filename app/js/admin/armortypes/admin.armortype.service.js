(function() {
  'use strict';
  
  angular.module('GNAdmin.armortypes')
  .service('ArmorTypesService', ArmorTypesService);
  
  ArmorTypesService.$inject = ['$http'];
  
  function ArmorTypesService($http) {
    var APIURL = 'http://localhost:28469/api/armortypes';
   
    return {
      addArmorType: addArmorType,
      deleteArmorType: deleteArmorType,
      getArmorTypes: getArmorTypes,
      updateArmorType: updateArmorType
    };
   
    function addArmorType(armortype) {
      return $http.post('http://localhost:28469/api/armortype', armortype)
        .then(addArmorTypeComplete)
        .catch(addArmorTypeFailed);
      
        function addArmorTypeComplete(response) {
            return response.data;
        }

        function addArmorTypeFailed(error) {
            console.log('XHR Failed for addArmorType.' + error.data);
        }      
    }
    
    function deleteArmorType(armortypeid) {
      return $http.delete('http://localhost:28469/api/armortype', {params: {armortypeid: armortypeid}})
        .then(deleteArmorTypeComplete)
        .catch(deleteArmorTypeFailed);
      
        function deleteArmorTypeComplete(response) {
            return response.data;
        }

        function deleteArmorTypeFailed(error) {
            console.log('XHR Failed for deleteArmorType.' + error.data);
        }      
    }
    
        
    function updateArmorType(armortype) {
        return $http.put('http://localhost:28469/api/armortype', armortype)
            .then(updateArmorTypesComplete)
            .catch(updateArmorTypesFailed);

        function updateArmorTypesComplete(response) {
            return response.data;
        }

        function updateArmorTypesFailed(error) {
            console.log('XHR Failed for updateArmorTypes.' + error.data);
        }
    }
    
    
    function getArmorTypes() {
        return $http.get(APIURL)
            .then(getArmorTypesComplete)
            .catch(getArmorTypesFailed);

        function getArmorTypesComplete(response) {
            return response.data;
        }

        function getArmorTypesFailed(error) {
            console.log('XHR Failed for getArmorTypes.' + error.data);
        }
    }

  }
  
}());