(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .service('BackgroundService', BackgroundService);
  
  BackgroundService.$inject = ['$http'];
  
  function BackgroundService($http) {
    var APIURL = 'http://localhost:28469/api/background';
   
    return {
      getBackground: getBackground,
      getBackgrounds: getBackgrounds
    };
    
    function getBackground() {
        return $http.get('http://localhost:28469/api/background')
            .then(getBackgroundComplete)
            .catch(getBackgroundFailed);

        function getBackgroundComplete(response) {
            return response.data;
        }

        function getBackgroundFailed(error) {
            console.log('XHR Failed for getBackgrounds.' + error.data);
        }
    }

    function getBackgrounds() {
        return $http.get('http://localhost:28469/api/backgrounds')
            .then(getBackgroundComplete)
            .catch(getBackgroundFailed);

        function getBackgroundComplete(response) {
            return response.data;
        }

        function getBackgroundFailed(error) {
            console.log('XHR Failed for getBackgrounds.' + error.data);
        }
    }

  }
  
}());