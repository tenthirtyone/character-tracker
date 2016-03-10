(function() {
  'use strict';
  
  angular
    .module('character-tracker.directives')
    .directive('obNavbar', obNavbar);

  function obNavbar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/obNavbar.template.html',
      scope: {
          navbardata: '='
      },
      controller: DirectiveController,
      controllerAs: 'vm'
    };

    return directive;
  }

  function DirectiveController() {
    var vm = this;
    
  }
  
}());