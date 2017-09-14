var app = angular.module('microElasticApp', ["ngRoute"]);

app.controller('microElasticCtrl', function($scope) {
    $scope.tabs = [
        {name:'home'},
        {name:'about'},
        {name:'contact'},
        {name:'team'}
    ];

    $scope.activeTab = "home";

    $scope.changeTab = function(tabName){
      $scope.activeTab = tabName;
    };
});

// app.config(function($routeProvider){
//   $routeProvider
//     .when("/home", {
//         templateUrl : "homeContent"
//     })
//     .when("/about", {
//         templateUrl : "html/about.html"
//     })
//     .when("/contact", {
//         templateUrl : "html/contact.html"
//     })
//     .when("/team", {
//         templateUrl : "html/team.html"
//     })
//     .otherwise("/",{
//
//     })
// });
