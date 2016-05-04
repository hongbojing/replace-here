/* controller for example.html */
(function() {
'use strict';

angular
    .module('myApp')
    .controller('ExampleController', ExampleController);

/* dependency injection to ensure valid minified code */
ExampleController.$inject = ['fooData'];

function ExampleController(fooData) {
    var vm = this;
    vm.foo = 'data from exmapleCtrl';

}

})();

