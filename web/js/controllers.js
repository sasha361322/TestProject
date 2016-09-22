var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource']);

clientApp.factory('Client',[
    '$resource', function ($resource) {
        return $resource('client/:clientId.:format',{
            clientId: 'clients',
            format: 'json'
        });
    }
]);

clientApp.controller('ClientList', function ($scope, $http, ClientService, Client) {
    $scope.clients = Client.query();
    $scope.edit = -1;

    $scope.Add = function () {
        ClientService.AddClient($scope.newclient);
        $scope.clients = Client.query();
    }
    $scope.Delete = function (id) {
        ClientService.DeleteClient(id);
        $scope.clients = Client.query();
    }
    $scope.PressedEdit = function (id) {
        $scope.edit = id;
    }
    $scope.Edit = function () {
        ClientService.EditClient($scope.oldclient);
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