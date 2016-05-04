/* 
    THIS FILE MAY BE DELETED IN YOUR PROJECT
    THIS IS MERELY AN EXAMPLE OF A CONTROLLER
    THAT IS CREATED FOR A DIRECTIVE
*/

/* Controller for directive-partial.html */
(function() {
'use strict';

angular
    .module('myApp')
    .controller('DirectiveController', DirectiveController);

/* dependency injection to ensure valid minified code */
DirectiveController.$inject = ['fooData'];

function DirectiveController(fooData) {
    /* jshint validthis: true */
    var vm = this;

    /* load defaults into view model */
    vm.foo = 'data in directive controlle file'; // view has access to this variable (i.e. ng-if="mainCtrl.foo === 'bar'")

}

})();

