app.controller('ProjectsController', ['$http', function ($http) {
    let vm = this;

    vm.newProject = {};
    vm.projects;
    let total;

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
    }; // end addNewProject

    vm.getProjects = function () {
        $http({
            method: 'GET',
            url: '/projects'
        })
            .then(function (response) {
                // vm.getProjectTotals();
                vm.projects = response.data;
            })
            .catch(function (error) {
                alert('Error making GET: ', error);
            });
    }; // end getProjects

    // vm.getProjectTotals = function () {
    //     $http({
    //         method: 'GET',
    //         url: '/totals'
    //     })
    //         .then(function (response) {
    //             vm.totalTimes = response.data;
    //             for (let i = 0; i < total.length; i++) {
    //                 console.log(total[i]);
                    
    //             }
    //             for (let value of vm.totalTimes) {
    //                 let st = moment(value.start_time)._i;
    //                 let et = moment(value.end_time)._i;
    //                 let stSplit = st.split(":");
    //                 let etSplit = et.split(":");
    //                 value.difference = (((etSplit[0]*60 + Number(etSplit[1]) + etSplit[2]/60) - (stSplit[0]*60 + Number(stSplit[1]) + stSplit[2]/60))/60).toFixed(2);
    //             };
    //         })
    //         .catch(function (error) {
    //             alert('Error making GET: ', error);
    //         });
    // }; // end getProjectTotals

    vm.getProjects();

    vm.deleteProject = function (data) {
        $http({
            method: 'DELETE',
            url: `/projects/${data.id}`
        })
            .then(function () {
                vm.getProjects();
            })
            .catch(function (error) {
                alert('Error making DELETE: ', error);
            });
    }; // end deleteProject
}]);