(function() {
'use strict';

angular
    .module('myApp')
    .filter('sampleFilter', sampleFilter);

/* filter that slices out first word of a string - just a random example */
function sampleFilter() {
    return function (value) {
        if (value && value !== '') {
            return value.slice(0, value.indexOf(' '));
        }
        else return;
    };
}

})();
