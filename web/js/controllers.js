var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource']);

clientApp.factory('Clients',[
    '$resource', function ($resource) {
        return $resource('client/clients/:clientId'
            // ,{
            // clientId:'@clientId'
        // }
        );
    }
]);

clientApp.controller('ClientList', function ($scope, $http, ClientService, Clients) {
    $scope.clients = Clients.query();
    $scope.edit = -1;
    $scope.Add = function () {
        Clients.save($scope.newclient);
        $scope.clients = Clients.query();
    }
    $scope.Delete = function (id) {
        Clients.delete({clientId:id})
        $scope.clients = Clients.query();
    }
    $scope.PressedEdit = function (id) {
        $scope.edit = id;
        $scope.oldclient = Clients.get({clientId:id});
    }
    $scope.Edit = function () {
        alert("edit");
        Clients.put($scope.oldclient);
        // ClientService.EditClient($scope.oldclient);
        $scope.edit = -1;
        $scope.clients = Clients.query();
    }
});
clientApp.factory("ClientService",['$http', function($http){
        var fac = {};
        fac.EditClient = function (oldclient) {
            $http.put("client/edit", oldclient);
        };
        return fac;
    }]);