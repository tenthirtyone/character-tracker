(function() {
  'use strict';
  
  angular.module('GNAdmin.feats')
  .service('FeatsService', FeatsService);
  
  FeatsService.$inject = ['$http'];
  
  function FeatsService($http) {
    var APIURL = 'http://localhost:28469/api/feats';
   
    return {
      addFeat: addFeat,
      deleteFeat: deleteFeat,
      getFeats: getFeats,
      updateFeat: updateFeat
    };
   
    function addFeat(feat) {
      return $http.post('http://localhost:28469/api/feat', feat)
        .then(addFeatComplete)
        .catch(addFeatFailed);
      
        function addFeatComplete(response) {
            console.log('test');
            console.log(response.data);
            return response.data;
        }

        function addFeatFailed(error) {
            console.log('XHR Failed for addFeat.' + error.data);
        }      
    }
    
    function deleteFeat(featid) {
      console.log(featid);
      return $http.delete('http://localhost:28469/api/feat', {params: {featid: featid}})
        .then(deleteFeatComplete)
        .catch(deleteFeatFailed);
      
        function deleteFeatComplete(response) {
            return response.data;
        }

        function deleteFeatFailed(error) {
            console.log('XHR Failed for deleteFeat.' + error.data);
        }      
    }
    
        
    function updateFeat(feat) {
        return $http.put('http://localhost:28469/api/feat', feat)
            .then(updateFeatsComplete)
            .catch(updateFeatsFailed);

        function updateFeatsComplete(response) {
            return response.data;
        }

        function updateFeatsFailed(error) {
            console.log('XHR Failed for updateFeats.' + error.data);
        }
    }
    
    
    function getFeats() {
        return $http.get(APIURL)
            .then(getFeatsComplete)
            .catch(getFeatsFailed);

        function getFeatsComplete(response) {
            console.log(response.data);
            return response.data;
        }

        function getFeatsFailed(error) {
            console.log('XHR Failed for getFeats.' + error.data);
        }
    }

  }
  
}());