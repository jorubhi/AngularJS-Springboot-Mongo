angular
    .module('UsersApp', [
        'UsersApp.controller', 'UserApp.service', 'ngRoute'

    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/users", { templateUrl: "pages/users.html", controller: "HelloWorldCtrl" }).
            when("/trades", { templateUrl: "pages/trades.html", controller: "HelloWorldCtrl" }).
            when("/welcome", { templateUrl: "pages/form.html", controller: "HelloWorldCtrl" }).
            otherwise({ redirectTo: '/welcome' });
    }])
