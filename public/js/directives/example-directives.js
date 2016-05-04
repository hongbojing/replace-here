/* one file used to define all simple HTML template directives */
(function() {
'use strict';

angular
    .module('myApp')
    .directive('ufDirective', ufDirective); // prefix with 'uf' and describe what the template is (i.e. ufCourses)

/* HTML template directive (prefix with 'uf') used to load HTML partial that is not loaded via routing in index.js */
function ufDirective() {
    return {
        restrict: 'E', // element based directive i.e. <uf-sample-directive></uf-sample-directive>
        templateUrl: 'partials/directives/directive-partial.html', // template partial to load
        controller: 'DirectiveController', // controller is defined here and not in the template (best practice)
        controllerAs: 'directiveCtrl' // controller as is setup here and not in the template (best practice)
    };
}

// repeat as needed for simple HTML template directives

})();