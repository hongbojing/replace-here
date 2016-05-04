/* 
    THIS FILE MAY BE DELETED IN YOUR PROJECT
    THIS IS MERELY AN EXAMPLE OF A CONTROLLER
    THAT IS CREATED FOR A NEW ROUTE
*/

/* controller for route-partial.html */
(function() {
'use strict';

angular
    .module('myApp')
    .controller('RouteController', RouteController);

/* dependency injection to ensure valid minified code */
RouteController.$inject = ['fooData'];

function RouteController(fooData) {
    /* jshint validthis: true */
    var vm = this;

    /* load defaults into view model */
    vm.foo = 'data from routeCtrl'; // view has access to this variable (i.e. ng-if="mainCtrl.foo === 'bar'")

}

})();

