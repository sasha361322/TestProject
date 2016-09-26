var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource']);
clientApp.factory('Clients',[
    '$resource', function ($resource) {
        return $resource('client/clients/:clientId', {}, {
                update: { method: 'PUT' }
            }
        );
    }
]);
clientApp.controller('ClientList', function ($scope, $http, Clients, $route) {
    $scope.clients = Clients.query();
    $scope.edit = -1;
    $scope.Add = function () {
        Clients.save($scope.newclient);
        $scope.clients = Clients.query();
        $route.reload();
    }
    $scope.Delete = function (id) {
        Clients.delete({clientId:id});
        $scope.clients = Clients.query();
        $route.reload();
    }
    $scope.PressedEdit = function (id) {
        $scope.edit = id;
        $scope.oldclient = Clients.get({clientId:id});
        $scope.mydate = $scope.oldclient.birthday;
    }
    $scope.Edit = function () {
        $scope.oldclient.birthday = document.getElementById('_birthday').value;
        Clients.update($scope.oldclient);
        $scope.edit = -1;
        $scope.clients = Clients.query();
        $route.reload();
    }
});