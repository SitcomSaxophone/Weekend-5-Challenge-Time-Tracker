app.controller('ProjectsController', ['$http', function ($http) {
    let vm = this;

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
}]);