(function() {
  'use strict';
  
  angular.module('GNAdmin.dndclass')
  .service('DnDClassService', DnDClassService);
  
  DnDClassService.$inject = ['$http'];
  
  function DnDClassService($http) {
    var APIURL = 'http://localhost:28469/api/dndclass';
   
    return {
      addDnDClass: addDnDClass,
      deleteDnDClass: deleteDnDClass,
      getDnDClass: getDnDClass,
      getDnDClasses: getDnDClasses,
      updateDnDClass: updateDnDClass
    };
   
    function addDnDClass(dndclass) {
      return $http.post('http://localhost:28469/api/dndclass', dndclass)
        .then(addDnDClassComplete)
        .catch(addDnDClassFailed);
      
        function addDnDClassComplete(response) {
            console.log('test');
            console.log(response.data);
            return response.data;
        }

        function addDnDClassFailed(error) {
            console.log('XHR Failed for addDnDClass.' + error.data);
        }      
    }
    
    function deleteDnDClass(dndclassid) {
      console.log(dndclassid);
      return $http.delete('http://localhost:28469/api/dndclass', {params: {dndclassid: dndclassid}})
        .then(deleteDnDClassComplete)
        .catch(deleteDnDClassFailed);
      
        function deleteDnDClassComplete(response) {
            return response.data;
        }

        function deleteDnDClassFailed(error) {
            console.log('XHR Failed for deleteDnDClass.' + error.data);
        }      
    }
    

    function updateDnDClass(dndclass) {
        return $http.put('http://localhost:28469/api/dndclass', dndclass)
            .then(updateDnDClassComplete)
            .catch(updateDnDClassFailed);

        function updateDnDClassComplete(response) {
            return response.data;
        }

        function updateDnDClassFailed(error) {
            console.log('XHR Failed for updateDnDClass.' + error.data);
        }
    }
    
    
    function getDnDClass() {
        return $http.get('http://localhost:28469/api/dndclass')
            .then(getDnDClassComplete)
            .catch(getDnDClassFailed);

        function getDnDClassComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getDnDClassFailed(error) {
            console.log('XHR Failed for getDnDClass.' + error.data);
        }
    }
    
    function getDnDClasses() {
        return $http.get('http://localhost:28469/api/dndclasses')
            .then(getDnDClassComplete)
            .catch(getDnDClassFailed);

        function getDnDClassComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getDnDClassFailed(error) {
            console.log('XHR Failed for getDnDClass.' + error.data);
        }
    }

  }
  
}());