const app = angular.module('TimeApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/projects'
    })
    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController as vm'
    })
    .when('/entries', {
        templateUrl: 'views/entry.html',
        controller: 'EntryController as vm'
    })
    .otherwise({
        template: '<h1>404</h1>'
    });
}]);