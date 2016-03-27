(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .service('DnDClassService', DnDClassService);
  
  DnDClassService.$inject = ['$http'];
  
  function DnDClassService($http) {
    var APIURL = 'http://localhost:28469/api/class';
   
    return {
      getDnDClass: getDnDClass,
      getDnDClasses: getDnDClasses
    };
    
    function getClass() {
        return $http.get('http://localhost:28469/api/class')
            .then(getClassComplete)
            .catch(getClassFailed);

        function getClassComplete(response) {
            return response.data;
        }

        function getClassFailed(error) {
            console.log('XHR Failed for getClasss.' + error.data);
        }
    }

    function getClasses() {
        return $http.get('http://localhost:28469/api/classes')
            .then(getClassesComplete)
            .catch(getClasessFailed);

        function getClassesComplete(response) {
            return response.data;
        }

        function getClassesFailed(error) {
            console.log('XHR Failed for getClassses.' + error.data);
        }
    }

  }
  
}());