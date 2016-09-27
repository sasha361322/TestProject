var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource']);
clientApp.factory('Clients',[
    '$resource', function ($resource) {
        return $resource('client/clients/:clientId', {}, {
                update: { method: 'PUT' }
            }
        );
    }
]);
clientApp.controller('ClientList', function ($scope, Clients, $route) {
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
                Clients.save($scope.newclient);
                $scope.clients = Clients.query();
                $route.reload();
            }
            $scope.Edit = function () {
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