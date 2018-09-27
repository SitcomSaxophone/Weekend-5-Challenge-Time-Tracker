app.controller('EntryController', ['$http', function ($http) {
    let vm = this;

    vm.addNewEntry = function (entryToAdd) {
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
    };

    vm.getEntries = function () {
        $http({
            method: 'GET',
            url: '/entries'
        })
        .then(function (response) {
            vm.history = response.data;
        })
        .catch(function (error) {
            alert('Error making GET: ', error);
        });
    };

    vm.getEntries();
}]);