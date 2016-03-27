(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .service('AlignmentService', AlignmentService);
  
  AlignmentService.$inject = ['$http'];
  
  function AlignmentService($http) {
    var APIURL = 'http://localhost:28469/api/alignment';
   
    return {
      getAlignment: getAlignment,
      getAlignments: getAlignments
    };
    
    function getAlignment() {
        return $http.get('http://localhost:28469/api/alignment')
            .then(getAlignmentComplete)
            .catch(getAlignmentFailed);

        function getAlignmentComplete(response) {
            return response.data;
        }

        function getAlignmentFailed(error) {
            console.log('XHR Failed for getAlignments.' + error.data);
        }
    }

    function getAlignments() {
        return $http.get('http://localhost:28469/api/alignments')
            .then(getAlignmentComplete)
            .catch(getAlignmentFailed);

        function getAlignmentComplete(response) {
            return response.data;
        }

        function getAlignmentFailed(error) {
            console.log('XHR Failed for getAlignments.' + error.data);
        }
    }

  }
  
}());