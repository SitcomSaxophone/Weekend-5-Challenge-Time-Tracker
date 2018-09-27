const app = angular.module('TimeApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/entry.html',
        controller: 'EntryController as vm'
    })
    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController as vm'
    })
    .otherwise({
        template: '<h1>404</h1>'
    });
}]);