(function() {
  'use strict';
  
  angular.module('GNAdmin.effects')
  .service('EffectsService', EffectsService);
  
  EffectsService.$inject = ['$http'];
  
  function EffectsService($http) {
    var APIURL = 'http://localhost:28469/api/effects';
   
    return {
      addEffect: addEffect,
      deleteEffect: deleteEffect,
      getEffect: getEffect,
      getEffects: getEffects,
      updateEffect: updateEffect
    };
   
    function addEffect(effect) {
      return $http.post('http://localhost:28469/api/effect', effect)
        .then(addEffectComplete)
        .catch(addEffectFailed);
      
        function addEffectComplete(response) {
            return response.data;
        }

        function addEffectFailed(error) {
            console.log('XHR Failed for addEffect.' + error.data);
        }      
    }
    
    function deleteEffect(effectid) {
      return $http.delete('http://localhost:28469/api/effect', {params: {effectid: effectid}})
        .then(deleteEffectComplete)
        .catch(deleteEffectFailed);
      
        function deleteEffectComplete(response) {
            return response.data;
        }

        function deleteEffectFailed(error) {
            console.log('XHR Failed for deleteEffect.' + error.data);
        }      
    }
    
        
    function updateEffect(effect) {
        return $http.put('http://localhost:28469/api/effect', effect)
            .then(updateEffectsComplete)
            .catch(updateEffectsFailed);

        function updateEffectsComplete(response) {
            return response.data;
        }

        function updateEffectsFailed(error) {
            console.log('XHR Failed for updateEffects.' + error.data);
        }
    }
    
    
    function getEffect() {
        return $http.get('http://localhost:28469/api/effect')
            .then(getEffectComplete)
            .catch(getEffectFailed);

        function getEffectComplete(response) {
            return response.data;
        }

        function getEffectFailed(error) {
            console.log('XHR Failed for getEffect.' + error.data);
        }
    }
    
    function getEffects() {
        return $http.get(APIURL)
            .then(getEffectsComplete)
            .catch(getEffectsFailed);

        function getEffectsComplete(response) {
            return response.data;
        }

        function getEffectsFailed(error) {
            console.log('XHR Failed for getEffects.' + error.data);
        }
    }

  }
  
}());