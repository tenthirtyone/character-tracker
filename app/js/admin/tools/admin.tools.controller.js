(function() {
  'use strict';
  
  angular.module('GNAdmin.tools')
  .controller('ToolController', ToolController);
  
  ToolController.$inject = ['ToolService'];
  
  function ToolController(ToolService) {
    var vm = this;
    vm.addTool = addTool;
    vm.deleteTool = deleteTool;
    vm.updateTool = updateTool;
    vm.tools = []
    vm.newTool = [
      {
        name: 'New Name'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      return getTools().then(function() {
        //loggins
      });
    }

    function getTools() {
      return ToolService.getTools()
        .then(function(res) {
        vm.tools = res
      })
    }
    
    function addTool(tool) {
      console.log(tool);
      return ToolService.addTool(tool)
      .then(function(res) {
        console.log('getting tools');
        getTools();
        vm.newTool = [
          {
            name: 'New Name'
          }
        ];
      })
    }
    
    function deleteTool(toolid) {
      return ToolService.deleteTool(toolid)
      .then(function(res) {
        getTools();
      })
    }
    
    function updateTool(tool) {
      
      return ToolService.updateTool(tool)
      .then(function(res) {
        getTools();
      })
    }
    
  }
}());