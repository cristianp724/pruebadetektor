app.factory("Data", ['$http',
    function($http) { 

        var providersUrl = 'providers/';

        var obj = {};

       
       
        obj.get = function(q, object) {
            return $http.get(providersUrl + q + ".php", {
                params: object
            }).then(function(results) {
                return results.data;
            });
        };

        return obj;
    }
]);