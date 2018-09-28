app.controller('ProjectsController', ['$http', function ($http) {
    let vm = this;

    vm.newProject = {};

    vm.addNewProject = function () {
        $http({
            method: 'POST',
            url: '/projects',
            data: vm.newProject
        })
        .then(function () {
            vm.getProjects();
            vm.newProject = {};
        })
        .catch(function () {
            alert('Error making POST: ', error);
        });
    };
 
    vm.getProjects = function () {
        $http({
            method: 'GET',
            url: '/projects'
        })
        .then(function (response) {
            vm.projects = response.data;
        })
        .catch(function (error) {
            alert('Error making GET: ', error);
        });
    }; // end getProjects

    vm.getProjects();

    vm.deleteProject = function (data) {
        $http({
            method: 'DELETE',
            url: '/projects'
        })
        .then(function () {
            vm.getProjects();
        })
        .catch(function (error) {
            alert('Error making DELETE: ', error);
        });
    };
}]);