var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource']);

clientApp.factory('Client',[
    '$resource', function ($resource) {
        return $resource('client/:clientId.:format',{
            clientId: 'clients',
            format: 'json'
        });
    }
]);

clientApp.controller('ClientList', function ($scope, $http, Client) {

    /*$http.get('client/clients.json').success(function (data, status, headers, config) {
            console.log('This is Data:', data, '\n\n This is Status', status, '\n\nThis is Headers', headers, '\n\nThis is Config', config);
            $scope.clients = data;
        })*/
         $scope.clients = Client.query();
    }
)