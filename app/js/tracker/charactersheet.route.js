(function() {
  'use strict';
  angular
    .module('character-tracker.charactersheet')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'sheet',
        config: {
          url: '/CharacterSheet',
          views: {
            '': {
              templateUrl: 'views/charactersheet.template.html',
              controller: 'CharacterSheetController',
              controllerAs: 'character'
            },
            'navbar@sheet': {
              templateUrl: 'views/charactersheetnavbar.template.html',
              controller: 'NavbarController',
              controllerAs: 'navbar'
            },
            'stats@sheet': {
              templateUrl: 'views/stats.template.html',
              controller: 'StatsController',
              controllerAs: 'stats'
            },
            'abilityScores@sheet': {
              templateUrl: 'views/abilityScores.template.html',
              controller: 'AbilityScoresController',
              controllerAs: 'abilityScores'
            },
            'gear@sheet': {
              templateUrl: 'views/gear.template.html',
              controller: 'GearController',
              controllerAs: 'gear'
            },
            'listbox@sheet': {
              templateUrl: 'views/listbox.template.html',
              controller: 'ListboxController',
              controllerAs: 'listbox'
            },
            'inventory@sheet': {
              templateUrl: 'views/inventory.template.html',
              controller: 'InventoryController',
              controllerAs: 'inventory'
            },
            'class@sheet': {
              templateUrl: 'views/class.template.html',
              controller: 'ClassController',
              controllerAs: 'class'
            },
            'combat@sheet': {
              templateUrl: 'views/combat.template.html',
              controller: 'CombatController',
              controllerAs: 'combat'
            },
            'effects@sheet': {
              templateUrl: 'views/effects.template.html',
              controller: 'EffectsController',
              controllerAs: 'effects'
            },
            'saves@sheet': {
              templateUrl: 'views/saves.template.html',
              controller: 'SavesController',
              controllerAs: 'saves'
            },
            'skills@sheet': {
              templateUrl: 'views/skills.template.html',
              controller: 'SkillsController',
              controllerAs: 'skills'
            },
            'spells@sheet': {
              templateUrl: 'views/spells.template.html',
              controller: 'SpellsController',
              controllerAs: 'spells'
            }
          }
        }
      }
    ];
  }
}());