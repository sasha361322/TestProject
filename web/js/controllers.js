var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource']);

clientApp.factory('Clients',[
    '$resource', function ($resource) {
        return $resource('client/:clientId',{
            clientId: 'clients',
            format: 'json'
        });
    }
]);

clientApp.controller('ClientList', function ($scope, $http, ClientService, Clients) {
    $scope.clients = Clients.query();
    $scope.edit = -1;
    $scope.Add = function () {
        ClientService.AddClient($scope.newclient);
        $scope.clients = Clients.query();
    }
    $scope.Delete = function (id) {
        ClientService.DeleteClient(id);
        $scope.clients = Clients.query();
    }
    $scope.PressedEdit = function (id) {
        $scope.edit = id;
        Clients.query({'clientId'});
    }
    $scope.Edit = function () {
        ClientService.EditClient($scope.oldclient);
        $scope.edit = -1;
        $scope.clients = Clients.query();
    }
});
clientApp.factory("ClientService",['$http', function($http){
        var fac = {};
        fac.AddClient = function (newclient) {
            $http.post("client/add", newclient);
        };
        fac.DeleteClient = function (id) {
            $http.delete("client/del/"+id);
        };
        fac.EditClient = function (oldclient) {
            $http.put("client/edit", oldclient);
        };
        return fac;
    }]);