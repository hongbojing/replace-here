(function() {
'use strict';

angular
    .module('myApp')
    .controller('MainController', MainController);

/* dependency injection to ensure valid minified code */
MainController.$inject = ['fooData'];

function MainController(fooData) {
    var vm = this;

    vm.foo = 'bar'; // view has access to this variable (i.e. ng-if="mainCtrl.foo === 'bar'")
    vm.message = 'this is my message!';

}

})();
