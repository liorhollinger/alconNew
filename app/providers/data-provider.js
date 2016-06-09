'use strict';

angular.module('myApp')


    .factory('DataFactory', [function() {

        var projs = [
            {
                id: 101,
                name: 'Amot Atrium Tower',
                imgs: ['101-1.jpg', '101-2.jpg','101-3.jpg']
            },
            {
                id: 102,
                name: 'Platinum Tower',
                imgs: ['102-1.jpg', '102-2.jpg','102-3.jpg']
            }

        ];

        return {
            getProjs : function() {
                return projs;
            },
            getProj  : function(id) {
                var filteredProjs = projs.filter(function(proj){
                    return proj.id === id;
                });
                return filteredProjs[0];
            }
        }
    }]);