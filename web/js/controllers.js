var clientApp = angular.module('clientApp', []);

clientApp.controller('ClientList', function ($scope){
    var date = new Date();

    $scope.today = date;
});