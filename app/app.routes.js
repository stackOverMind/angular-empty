angular.module('app',['ngRoute'])
.controller('IndexController',['$scope',function($scope){
    $scope.hello="world";


}])
.controller('TestController',['$scope',function($scope){


}])

.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/',{
        templateUrl:'partials/index.html',
        controller:'IndexController'
    })
    .when('/test',{
        templateUrl:'partials/test.html',
        controller:'TestController'
    })
    .otherwise({

        templateUrl:'partials/404.html'
    });
    $locationProvider.html5Mode(true);
})