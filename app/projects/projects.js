'use strict';

angular.module('myApp.projects', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'projects/projects.html',
            controller: 'projectsCtrl as vm'
        });
        $routeProvider.when('/project/:id', {
            templateUrl: 'projects/proj.html',
            controller: 'ProjCtrl as vm'
        });

    }])

    .controller('projectsCtrl', ['DataFactory', function (DataFactory) {
        //console.log('DataFactory:', DataFactory);
        this.projs = DataFactory.getProjs();
    }])

    .controller('ProjCtrl', ['$routeParams', 'DataFactory', function ($routeParams, DataFactory) {
        //console.log('$routeParams', $routeParams);
        this.proj = DataFactory.getProj(+$routeParams.id);
        this.projimgs = this.proj.imgs;
        console.log(this.projimgs);






    }]);