(function() {
  'use strict';
  
  angular.module('GNAdmin')
  .service('AdminService', AdminService);
  
  AdminService.$inject = ['$http', '$state'];
  
  function AdminService($http, $state) {
    var CharacterURL = 'localhost:28469/api/class';
    return {
   
    };
   
    
  }
  
}());