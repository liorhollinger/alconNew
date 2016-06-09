'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl as vm'
        });
        $routeProvider.when('/project/:id', {
            templateUrl: 'view2/proj.html',
            controller: 'ProjCtrl as vm'
        });

    }])

    .controller('View2Ctrl', ['DataFactory', function (DataFactory) {
        //console.log('DataFactory:', DataFactory);
        this.projs = DataFactory.getProjs();
    }])

    .controller('ProjCtrl', ['$routeParams', 'DataFactory', function ($routeParams, DataFactory) {
        //console.log('$routeParams', $routeParams);
        this.proj = DataFactory.getProj(+$routeParams.id);
        this.projimgs = this.proj.imgs;
        console.log(this.projimgs);






    }]);