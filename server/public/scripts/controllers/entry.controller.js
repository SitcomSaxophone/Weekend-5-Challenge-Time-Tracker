app.controller('EntryController', ['$http', function ($http) {
    let vm = this;

    vm.newEntry = {};
    
    vm.addNewEntry = function (entryToAdd) {
        console.log('clicked');
        $http({
            method: 'POST',
            url: '/entries',
            data: entryToAdd
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
            vm.projects = response.data;
        })
        .catch(function (error) {
            alert('Error making GET: ', error);
        });
    }; // end getProjects

    vm.getProjects();
    vm.getEntries();
}]);