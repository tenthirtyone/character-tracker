(function() {
  "use strict";
  
  // Response Headers
  angular.module('character-tracker')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };     
  }]); 
}());