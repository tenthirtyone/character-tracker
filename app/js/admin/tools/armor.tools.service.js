(function() {
  'use strict';
  
  angular.module('GNAdmin.tools')
  .service('ToolService', ToolService);
  
  ToolService.$inject = ['$http'];
  
  function ToolService($http) {
    var APIURL = 'http://localhost:28469/api/tool';
   
    return {
      addTool: addTool,
      deleteTool: deleteTool,
      getTool: getTool,
      getTools: getTools,
      updateTool: updateTool
    };
   
    function addTool(tool) {
      return $http.post('http://localhost:28469/api/tool', tool)
        .then(addToolComplete)
        .catch(addToolFailed);
      
        function addToolComplete(response) {
            return response.data;
        }

        function addToolFailed(error) {
            console.log('XHR Failed for addTool.' + error.data);
        }      
    }
    
    function deleteTool(toolid) {
      return $http.delete('http://localhost:28469/api/tool', {params: {toolid: toolid}})
        .then(deleteToolComplete)
        .catch(deleteToolFailed);
      
        function deleteToolComplete(response) {
            return response.data;
        }

        function deleteToolFailed(error) {
            console.log('XHR Failed for deleteTool.' + error.data);
        }      
    }
    
        
    function updateTool(tool) {
        return $http.put('http://localhost:28469/api/tool', tool)
            .then(updateToolComplete)
            .catch(updateToolFailed);

        function updateToolComplete(response) {
            return response.data;
        }

        function updateToolFailed(error) {
            console.log('XHR Failed for updateTool.' + error.data);
        }
    }
    
    
    function getTool() {
        return $http.get(APIURL)
            .then(getToolComplete)
            .catch(getToolFailed);

        function getToolComplete(response) {
            return response.data;
        }

        function getToolFailed(error) {
            console.log('XHR Failed for getTool.' + error.data);
        }
    }
    
    function getTools() {
        return $http.get('http://localhost:28469/api/tools')
            .then(getToolsComplete)
            .catch(getToolsFailed);

        function getToolsComplete(response) {
            return response.data;
        }

        function getToolsFailed(error) {
            console.log('XHR Failed for getTools.' + error.data);
        }
    }

  }
  
}());