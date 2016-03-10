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