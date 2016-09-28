var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource', 'ngMessages']);
clientApp.factory('Clients',[
    '$resource', function ($resource) {
        return $resource('client/clients/:clientId', {}, {
                update: { method: 'PUT' }
            }
        );
    }
]);
clientApp.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});
clientApp.controller('ClientList', function ($scope, Clients, $route) {
    $scope.currentPage = 0;
    $scope.clientsPerPage = 5;
    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.today = new Date();
    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName){
            $scope.reverse = !$scope.reverse;
        }
        else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    }
    $scope.isSortUp = function(fieldName){
        return $scope.sortField === fieldName && !$scope.reverse;
    }
    $scope.isSortDown = function(fieldName){
        return $scope.sortField === fieldName && $scope.reverse;
    }
    $scope.firstPage = function() {
        return $scope.currentPage == 0;
    }
    $scope.lastPage = function() {
        var lastPageNum = Math.ceil($scope.clients.length / $scope.clientsPerPage - 1);
        return $scope.currentPage == lastPageNum;
    }
    $scope.numberOfPages = function(){
        return Math.ceil($scope.clients.length / $scope.clientsPerPage);
    }
    $scope.startingClient = function() {
        return $scope.currentPage * $scope.clientsPerPage;
    }
    $scope.pageBack = function() {
        $scope.currentPage = $scope.currentPage - 1;
    }
    $scope.pageForward = function() {
        $scope.currentPage = $scope.currentPage + 1;
    }
    $scope.clients = Clients.query();
    $scope.AddMessage = 'Добавить нового пользователя';

    //when Add button is pressed
    $scope.PressedAdd = function () {
        $scope.showPopUpDialog = true;
        $scope.ifAddThenTrue = true;
        $scope.AddOrEditMessage = $scope.AddMessage;
    }
    $scope.Delete = function (id) {
        Clients.delete({clientId:id});
        $scope.clients = Clients.query();
        $route.reload();
    }
}).directive('poUpDialog', function () {
    return{
        restrict:'E',
        scope:false,
        templateUrl:'/html/popUpDialog.html',
        controller:function($scope, $route, Clients){
            var EditMessage = 'Редактировать пользователя';
            $scope.AddOrEditMessage = $scope.AddMessage;
            $scope.showPopUpDialog = false;
            $scope.ifAddThenTrue = true;
            //when Edit button is pressed
            $scope.PressedEdit = function (id) {
                $scope.showPopUpDialog = true;
                $scope.ifAddThenTrue = false;
                $scope.AddOrEditMessage = EditMessage;
                $scope.newclient = Clients.get({clientId:id});
            }
            //when Add or Edit button is pressed. add if Add one
            $scope.AddOrEdit = function (add) {
                $scope.newclient.birthday = document.getElementById('_birthday').value;
                if (add)
                    $scope.Add();
                else
                    $scope.Edit();
                $scope.showPopUpDialog = false;
            }
            $scope.Add = function () {
                document.getElementById('myForm').reset();
                Clients.save($scope.newclient);
                $scope.clients = Clients.query();
                $route.reload();
            }
            $scope.Edit = function () {
                document.getElementById('myForm').reset();
                Clients.update($scope.newclient);
                $scope.edit = -1;
                $scope.clients = Clients.query();
                $route.reload();
            }
            $scope.closePopUpDialog = function(){
                document.getElementById('myForm').reset();
                $scope.showPopUpDialog = false;
            }
        }
    }
});