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
                for (let value of vm.history) {
                    let st = moment(value.start_time)._i;
                    let et = moment(value.end_time)._i;
                    let stSplit = st.split(":");
                    let etSplit = et.split(":");
                    value.difference = (((etSplit[0]*60 + Number(etSplit[1]) + etSplit[2]/60) - (stSplit[0]*60 + Number(stSplit[1]) + stSplit[2]/60))/60).toFixed(2);
                    value.entryDate = moment(value.date).format('MM/DD/YYYY');
                };
                
                // let d = Integer.parsInt(c[0]) + Integer.parseInt(c[1]) / 60.0;
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

    vm.deleteEntry = function (data) {
        $http({
            method: 'DELETE',
            url: `/entries/${data.id}`
        })
            .then(function () {
                vm.getEntries();
            })
            .catch(function (error) {
                alert('Error making DELETE: ', error);
            });
    }; // end deleteEntry
}]);