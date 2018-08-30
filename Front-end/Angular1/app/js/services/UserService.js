(function () {
  'use strict';

  angular
    .module('UserApp.service', ['UsersApp.controller'])
    .service('UserService', function ($http) {
      var userAPI = {};

      var APIurl='https://jsonplaceholder.typicode.com/users'
      var APIurl2='http://localhost:8080/api/all'

      userAPI.getUsers = function () {

        return $http.get(APIurl2)

        // return $http({
        //   method: 'GET',
        //   url: APIurl2,
        //   headers: { 'Content-Type': 'application/json' }
        // });
      }
      
      userAPI.addUsers=function(user){  var promise = $http.post('http://localhost:8080/api', user);} 

      userAPI.deleteUser= function(Id) {console.log(Id); $http.delete("http://localhost:8080/api?dl="+Id) }

      return userAPI;

    })



}());