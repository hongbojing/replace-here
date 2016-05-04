(function() {
'use strict';

angular
    .module('myApp', [
        'ngRoute',
        'ngAnimate'
    ])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true); // enable angular HTML5 mode

    $routeProvider
        .when('/', {
            templateUrl: 'partials/examples.html', // file name = name of app
            controller: 'ExampleController', // controller ProudCamelCase and long (Controller)
            controllerAs: 'exampleCtrl' // controllerAs camelCase and short (Ctrl)
        })
        .when('/anotherexample', {
            templateUrl: 'partials/anotherexample.html',
            controller: 'RouteController', // controller ProudCamelCase and long (Controller)
            controllerAs: 'routeCtrl' // controllerAs camelCase and short (Ctrl)
        })
        .otherwise({
            redirectTo: '/'
        })
    ;

}

})();
