(function() {
'use strict';

angular
    .module('myApp')
    .factory('fooData', fooData) // define data services for what data they relate to, i.e. 'courseData'
    .factory('userData', userData);

/* dependency injection to ensure valid minified code */
fooData.$inject = ['$http'];
userData.$inject = ['$http'];

function fooData($http) {
    /* define functions related to getting / manipulating 'fooData' */
    var getData = function() {
        return $http.get('fake.api.url')
            .success(function(response) {
                return response;
            })
        ;
    };

    // return set of functions that can be accessed by controllers after injecting the service
    return {
        getData: getData
    };
}

/* get information about user if they have a shib session */
function userData($http, lightbox) {
    var getUser = function() {
        var url = '/api/uf/user';

        return $http.get(url, {ignoreLoadingBar: true})
            .success(function(user) {
                // @TODO something
            })
            .error(function() {
                // @TODO something
            })
        ;
    };

    return {
        getUser: getUser
    };
}

})();
