app.controller('EntryController', ['$http', function ($http) {
    let vm = this;

    vm.newEntry = {};

    vm.addNewEntry = function () {
        $http({
            method: 'POST',
            url: '/entries',
            data: vm.newEntry
        })
        .then(function () {
            vm.getEntries();
        })
        .catch(function (error) {
            alert('Error making POST: ', error)
        });
    }; // end addNewEntry

    vm.getEntries = function () {
        $http({
            method: 'GET',
            url: '/entries'
        })
        .then(function (response) {
            vm.history = response.data;
            console.log(vm.history);
            vm.newEntry = {};
        })
        .catch(function (error) {
            alert('Error making GET: ', error);
        });
    }; // end getEntries

    vm.getProjects = function () {
        $http({
            method: 'GET',
            url: '/projects'
        })
        .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                parseInt(response.data[i].id);   
            };
            vm.projects = response.data;
        })
        .catch(function (error) {
            alert('Error making GET: ', error);
        });
    }; // end getProjects

    vm.getProjects();
    vm.getEntries();
}]);