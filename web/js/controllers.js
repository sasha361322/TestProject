var clientApp = angular.module('clientApp', []);

clientApp.controller('ClientList', function ($scope, $http){
    $http.get('client/clients.json').success(function (data, status, headers, config) {
        console.log('This is Data:',data,'\n\n This is Status',status,'\n\nThis is Headers',headers,'\n\nThis is Config',config);
        $scope.clients = data;
    });
});