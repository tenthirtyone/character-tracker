(function() {
  'use strict';
  
  angular.module('character-tracker.directives', []);
  
}());
(function() {
  'use strict';
  
  angular.module('character-tracker.login', []);
  
}());
(function() {
  "use strict";
  
  angular.module('character-tracker.mocks', [
    'ngMockE2E'
  ]);
}());
(function() {
  'use strict';
  
  angular.module('character-tracker.tracker', []);
  
}());
(function() {
  'use strict';
    
  angular.module('character-tracker', [
    'character-tracker.directives',
    'character-tracker.login',
    'character-tracker.mocks',
    'character-tracker.tracker',
    'ngStorage',
    'ui.router'    
  ]);
      
}());
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
(function() {
  'use strict';
  
  angular.module('character-tracker.login')
  .controller('LoginController', LoginController);
  
  LoginController.$inject = ['LoginService'];
  
  function LoginController(LoginService) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.loginSuccess = true;
    
    vm.login = getLogin;
    vm.loginErrorMsg = getErrorMsg;
    vm.isLoginError = isLoginError;
    
    init();
    
    function init() {
      $.material.init();
    }
    
    function getErrorMsg() {
      return LoginService.getErrorMsg();
    }
    
    function getLogin(credentials) {
      LoginService.Login(credentials);
    }
    
    function isLoginError() {
      return LoginService.isLoginError();
    }
  }
}());
(function() {
  'use strict';
  angular
    .module('character-tracker.login')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'login',
        config: {
          url: '/login',
          controller: 'LoginController',
          controllerAs: "login",
          templateUrl: 'views/login.template.html'
        }
      }
    ];
  }
}());
(function() {
  'use strict';
  
  angular.module('character-tracker.login')
  .service('LoginService', LoginService);
  
  LoginService.$inject = ['$http', '$state'];
  
  function LoginService($http, $state) {
    var login = true;
    var APIURL = 'http://localhost:28469/api/login';
    var loginError = false;
    var loginErrorMsg = '';

    return {
      getErrorMsg: getErrorMsg,
      isLoginError: isLoginError,
      Login: Login    
    };
    
    function getErrorMsg() {
      return loginErrorMsg;
    }
    
    function isLoginError() {
      return loginError;
    }
    
    function Login(credentials) {
      $http.get(APIURL, 
               {headers : {'Authorization': 'Basic ' + 
                btoa(credentials.username + ':' + credentials.password)}})
      .then(function(res) {
        $state.go('tracker');
        loginError = false;
        loginErrorMsg = '';
      }) 
      .catch(function(err) {
        //log
        loginError = true;
        loginErrorMsg = err.data.error.msg || 'Auth Failed';
      });
    }
    
  }
  
}());
(function() {
  "use strict";
  
  angular.module('character-tracker.mocks')
  .run(mockAPI);
  
  mockAPI.$inject = ['$httpBackend'];
  
  function mockAPI($httpBackend) {
  
    var mockContracts = {
      "vendor_offer": {
        "signature": "d6dc2a4b44b143971a328d5fc8509913fe2446f2a701257091c53449fa1a6f0f4e2f901c3e27b0d61aaaadd38d481aa39bb158313cbc15357ff4656d265cbb0e",
        "listing": {
          "item": {
            "category": "star wars",
            "description": "Squad goals",
            "price_per_unit": {
              "bitcoin": "0.001"
            },
            "title": "Jedi Squad",
            "process_time": "3",
            "image_hashes": [
              "a26e08897885013fd930ade07772225fd98a267e"
            ],
            "nsfw": false,
            "keywords": [
              "star wars",
              "jedi"
            ]
          },
          "moderators": [
            {
              "fee": "10.0%",
              "name": "BDunbar",
              "blockchain_id": "@bdunbar",
              "avatar": "38f4cae21cef9805e085fb6d21b8108030b4f612",
              "short_description": "",
              "pubkeys": {
                "encryption": {
                  "key": "399e53e5f0908a33c0857f561d154f2fbafc09c7ae7d6b74da3b40d049c14457",
                  "signature": "074bb93c0af20ddbe2568f94050429a3c5ca4b3661fa3c5a1c810b5128ed945db0ca9d399bb3f2baec1322e9ff92251d7b21392c5c06f87d4877fa11d606e708"
                },
                "signing": {
                  "key": "6a8cbd64631272644503a3dea3f63bd1ef6148de25d1cc0fec38671dfa9c6f1c",
                  "signature": "70f5e67522bfa6ba56b402e9ea71c50f15c2caf5058fc565c9959ad1427e275c9e5bce18b98444734973c54f02a226d17092a95ac7f1a56e2287c7a996193606"
                },
                "bitcoin": {
                  "key": "024febe65c1b237c37394ebfd2d5abc2af564c4a0ca8435a6b3045a4a3e6e7e8d4",
                  "signature": "3efdc208101d0aee0973ec6f75620ed25fb0873a69299aeee81740172aa7e50a0d68fbfe4bc57874a94d7c8e095ef519ee3d974ad880b9f7f62f0aaac1e7140e"
                }
              },
              "guid": "fa5025f8ac9fcba532cff9608d1c080a84e2f7a1"
            }
          ],
          "id": {
            "pubkeys": {
              "encryption": "9e55643cd11bd1d01915f2de03ea11c80138a2bb4e0b9e04a6e924ca7c6ac76c",
              "guid": "318bff260a7cc2133ef59fac40e23d5f1361e111eae78f31f8be154cc5cd88af",
              "bitcoin": "0284c670567cd6555c2d5519b74aaade7af3ca2781c6b79db78091b9f0c53939cc"
            },
            "guid": "a9c6bb758d97b74520008a9f38710f946750516a",
            "blockchain_id": "@drwasho"
          },
          "metadata": {
            "category": "service",
            "version": "0.1",
            "category_sub": "fixed price",
            "expiry": "2016-01-25T08:12 UTC"
          }
        }
      }
    };
    
    var mockFollowers = {
    "followers": [
          {
            "avatar_hash": "43e0b057e37f34fdc6f8f421af0875c63a20e321", 
            "guid": "53328edb89afa8a653b4fa062f0cb255aa4a1e50", 
            "handle": "@chrispacia", 
            "name": "Chris Pacia", 
            "nsfw": false
          }, 
          {
            "avatar_hash": "27c221cd1b99a0feed173dc52ae9239e175176e3", 
            "guid": "2a7a579ca9a43a1b3d8338546c95196c5ef46170", 
            "handle": "@drwasho", 
            "name": "drwasho", 
            "nsfw": false
          }
        ]
      };
    
    var mockFollowing = {
        "following": [
        {
          "avatar_hash": "0ad0516a91bbd9147e1f23ccb5f3310181d924ed", 
          "guid": "f9ea0b394c58e14c75e8a754ae721ad8bb0cf850", 
          "handle": "", 
          "name": "SamTest", 
          "nsfw": false
        }, 
        {
          "avatar_hash": "23aeab637fc55e8b9d73dfba28ab111a53261f46", 
          "guid": "b1a4a8b4b7e934c7f8b119a671044c90a7513968", 
          "handle": "@seed1", 
          "name": "OpenBazaar Seed Server", 
          "nsfw": false
        }
      ]
    };
    
    
    var mockProfile = {
      "profile": {
        "social_accounts": {
          "twitter": {
            "username": "TestTwitter",
            "proof_url": ""
          },
          "facebook": {
            "username": "test Facebook",
            "proof_url": ""
          },
          "instagram": {
            "username": "Testagram",
            "proof_url": ""
          },
          "snapchat": {
            "username": "Testchat",
            "proof_url": ""
          }
        },
        "moderation_fee": 0.5,
        "moderator": true,
        "nsfw": true,
        "handle": "",
        "guid": "91753abd80bc3c3f38dc2e84c027bd742e896e74",
        "background_color": 6176310,
        "secondary_color": 13389899,
        "location": "UNITED_STATES",
        "short_description": "Saying something interesting",
        "primary_color": 12208703,
        "header_hash": "9062b52ff57fdcfce486915cfa0d15128c56ae45",
        "website": "https://github.com/tenthirtyone/character-tracker",
        "vendor": false,
        "text_color": 16777215,
        "public_key": "d4164d25c274e8da50edd8d4f2e0814051592cedb7ba1f5103ab3c9efff8f663",
        "about": "<p>This is my nifty about section<\/p>",
        "name": "Mobile Bazaar Test Shop",
        "email": "no@email.com",
        "pgp_key": "",
        "temp_handle": "@tenthirtyone",
        "avatar_hash": "770d2f23750c41c6682f38aa260940db02fff81c"
      }
    };
    
    var mockSales = [{
      "status": 0,
      "buyer": "@chrispacia",
      "description": "Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. \r\n\r\nThe prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy's portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.",
      "title": "Handbag",
      "order_id": "549c844c08048166ed4ac9d44d9bf8916c7ce9cb",
      "timestamp": 1449414448.939755,
      "btc_total": 0.002,
      "contract_type": "physical good",
      "thumbnail_hash": "cf344e4dc1eb9c38aff103c18116cd15754ad30f"
    }];
    
    var mockSettings = {
      "blocked_guids": [""],
      "refund_address": "n2eMqTT929pb1RDNuqEnxdaLau1rxy3efi",
      "refund_policy": "No refund policy",
      "notifications": true,
      "seed": "e4ed7abcd397c3adf9f13a8dd31db6c99dbf48315e1c6d75196318c0bb7bfedd",
      "shipping_addresses": ["[{\"name\":\"Washington Sanchez\",\"street\":\"1060 W Addison\",\"city\":\"Chicago\",\"state\":\"Illinois\",\"postal_code\":\"60613\",\"country\":\"UNITED_STATES\",\"displayCountry\":\"United States of America (The)\"}]"],
      "terms_conditions": "No terms or conditions",
      "language": "en",
      "ssl": true,
      "country": "UNITED_STATES",
      "time_zone": "10",
      "libbitcoin_server": "",
      "currency_code": "BTC"
    };
    
    
    $httpBackend.whenGET('http://localhost:28469/api/contracts').respond(function(){
      return [200, {success: true}, {"token": "testToken"}];
    });
           
    $httpBackend.whenGET('http://localhost:28469/api/login').respond(function(){
      return [200, {success: true}, {"token": "testToken"}];
    });
            
    $httpBackend.whenGET('http://localhost:28469/api/followers').respond(function(){
      return [200, mockFollowers, {}];
    });   
         
    $httpBackend.whenGET('http://localhost:28469/api/following').respond(function(){
      return [200, mockFollowing, {}];
    });   
    
    $httpBackend.whenGET('http://localhost:28469/api/profile').respond(function(){
      return [200, mockProfile, {}];
    });
    
    $httpBackend.whenGET('http://localhost:28469/api/settings').respond(function(){
      return [200, mockSettings, {}];
    });
    
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();

  }
  
  
}());
(function() {
  'use strict';
  
  angular.module('character-tracker.tracker')
  .controller('TrackerController', TrackerController);
  
  TrackerController.$inject = ['TrackerService'];
  
  function TrackerController(TrackerService) {
    var vm = this;
    
    vm.abilityScores = [
      {name: 'Stregnth', abbr: 'STR', score: 10},
      {name: 'Dexterity', abbr: 'DEX', score: 10},
      {name: 'Constitution', abbr: 'CON', score: 10},
      {name: 'Intelligence', abbr: 'INT', score: 10},
      {name: 'Wisdom', abbr: 'WIS', score: 10},
      {name: 'Charisma', abbr: 'CHA', score: 10}
    ]
    
    vm.gear = [
      {name: 'Left Earring'},
      {name: 'Head'},
      {name: 'Right Earring'},
      {name: 'Shoulders'},
      {name: 'Face'},
      {name: 'Throat'},
      {name: 'Cloak'},      
      {name: 'Torso'},
      {name: 'Hands'},
      {name: 'Left Ring'},
      {name: 'Belt'},
      {name: 'Right Ring'},
      {name: 'Legs'},
      {name: 'Boots'},
      {name: 'Charm'},
      {name: 'Weapon 1'},
      {name: 'Weapon 2'},
      {name: 'Ranged Weapon'}
    ];
    
    vm.tabs = [
      {name: 'Inventory'},
      {name: 'Combat'},
      {name: 'Saves/Checks'},
      {name: 'Skills'},
      {name: 'Spells'},
      {name: 'Effects'}
    ]
    
    vm.currentTab = vm.tabs[0].name;
    
    vm.setTab = function(tabName) {
      vm.currentTab = tabName;
    }
    
    init();
    
    function init() {
      $.material.init();
    }
    
  }
}());
(function() {
  'use strict';
  angular
    .module('character-tracker.tracker')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'tracker',
        config: {
          url: '/tracker',
          controller: 'TrackerController',
          controllerAs: "character",
          templateUrl: 'views/tracker.template.html'
        }
      }
    ];
  }
}());
(function() {
  'use strict';
  
  angular.module('character-tracker.tracker')
  .service('TrackerService', TrackerService);
  
  TrackerService.$inject = ['$http', '$state'];
  
  function TrackerService($http, $state) {
    var login = true;
    var APIURL = 'http://localhost:28469/api/login';
    var loginError = false;
    var loginErrorMsg = '';

    return {
      getErrorMsg: getErrorMsg,
      isLoginError: isLoginError,
      Login: Login    
    };
    
    function getErrorMsg() {
      return loginErrorMsg;
    }
    
    function isLoginError() {
      return loginError;
    }
    
    function Login(credentials) {
      $http.get(APIURL, 
               {headers : {'Authorization': 'Basic ' + 
                btoa(credentials.username + ':' + credentials.password)}})
      .then(function(res) {
        $state.go('tracker');
        loginError = false;
        loginErrorMsg = '';
      }) 
      .catch(function(err) {
        //log
        loginError = true;
        loginErrorMsg = err.data.error.msg || 'Auth Failed';
      });
    }
    
  }
  
}());
(function() {
  // Modified version of John Papa's Router Helper
  // https://github.com/johnpapa/angular-styleguide
  
  angular
    .module('character-tracker')
    .provider('routerHelper', routerHelperProvider);

  routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

      this.$get = RouterHelper;

      $locationProvider.html5Mode(false);

      RouterHelper.$inject = ['$state'];

      function RouterHelper($state) {
          var service = {
            configureStates: configureStates,
            getStates: getStates
          };

          return service;

          function configureStates(states, otherwisePath) {
            states.forEach(function(state) {
                $stateProvider.state(state.state, state.config);
            });
            $urlRouterProvider.otherwise("login");
          }

          function getStates() { return $state.get(); }
      }
  }
}());
(function() {
  "use strict";
  
  angular.module('character-tracker')
    .factory('tokenInterceptor', tokenInterceptor);
       
    tokenInterceptor.$inject = ['$localStorage'];
  
    function tokenInterceptor($localStorage) {  
      return {
          request: function(config) {
              if (!config.headers.Authorization){
                config.headers.Authorization = $localStorage.token || '';
              }
              return config;
          },
          response: function(response) {
            if(response.headers('Authorization')) {
              $localStorage.token = response.headers('Authorization');
            }
            return response;
          }
      };
  }
  
  angular.module('character-tracker')
    .config(['$httpProvider', function($httpProvider) {  
      $httpProvider.interceptors.push('tokenInterceptor');
  }]);
}());
(function() {
  'use strict';
  
  angular
    .module('character-tracker.directives')
    .directive('obEditable', obEditable);

  function obEditable() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/obEditable.template.html',
      scope: {
          heading: '@',
          data: '=',
      },
      controller: DirectiveController,
      controllerAs: 'vm',
      bindToController: true,
      link: link
    };

    return directive;
    
    function link(scope, element, attrs) {
      console.log(element);
      console.log(attrs);
    }
  }

  function DirectiveController($window, $timeout) {
    var vm = this;
    var tempVal = '';
    
    vm.editMode = false;    
    
    vm.editCancel = function() {      
      vm.editMode = false;
      vm.data = tempVal;
      tempVal = ''
    }    
    
    vm.editOff = function() {
      vm.editMode = false;
    }
    
    vm.editOn = function() {
      tempVal = vm.data;
      vm.editMode = true;
      vm.setFocus();
    }
    
    vm.saveData = function() {
      //Make Service Call
      vm.editOff();
    }
    
    vm.setFocus = function() {
      //var el = $window.document.getElementById(vm.heading);
      var el = angular.element(document.querySelector('#' + vm.heading));

      //This is kind of an angular/JS limitation.
      //The DOM won't update until after the function is run
      //so I need an async function 
      $timeout(function() {
        if (el) {
        el[0].focus();
        el[0].select();
        }
      });
      
      

    }
    
    
  }
}());
(function() {
  'use strict';
  
  angular
    .module('character-tracker.directives')
    .directive('ngEnterKey', ngEnterKey);

  function ngEnterKey() {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;
    
    function link(scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          event.preventDefault();
          scope.$apply(function (){
            scope.$eval(attrs.ngEnterKey);
          });
          
        }
      });
    }
  }

}());
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