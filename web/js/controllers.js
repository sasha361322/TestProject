var clientApp = angular.module('clientApp', ['ngRoute', 'ngResource', 'ngMessages']);
//Фабрика для REST
clientApp.factory('Clients',[
    '$resource', function ($resource) {
        return $resource('client/clients/:clientId', {}, {
                update: { method: 'PUT' }
            }
        );
    }
]);
//Фильтр для пагинации
clientApp.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});
clientApp.controller('ClientList', function ($scope, Clients, $route) {
    //Для пагинации
    $scope.currentPage = 0;
    $scope.clientsPerPage = 5;
    //Для сортировки по столбцам
    $scope.sortField = undefined;
    $scope.reverse = false;
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
    //Получить всех клиентов
    $scope.clients = Clients.query();
    $scope.AddMessage = 'Добавить нового пользователя';

    //when Add button is pressed
    $scope.PressedAdd = function () {
        $scope.showPopUpDialog = true;
        $scope.ifEditThenTrue = false;
        $scope.AddOrEditMessage = $scope.AddMessage;
    }
    /**
     * @param id - id удаляемого клиента
     */
    $scope.Delete = function (id) {
        Clients.delete({clientId:id});
        $scope.clients = Clients.query();
        $route.reload();
    }
    //Директива для всплывающей формы, в которой происходит добавление/удаление клиента
}).directive('poUpDialog', function () {
    return{
        restrict:'E',
        scope:false,
        templateUrl:'/html/popUpDialog.html',
        controller:function($scope, $route, Clients){
            var EditMessage = 'Редактировать пользователя';
            $scope.AddOrEditMessage = $scope.AddMessage;
            $scope.showPopUpDialog = false;
            $scope.ifEditThenTrue = false;//переменная определяющая, какая из возможных операция (добавлени/удаление) выполняется
            //when Edit button is pressed
            $scope.PressedEdit = function (id) {
                $scope.showPopUpDialog = true;
                $scope.ifEditThenTrue = true;
                $scope.AddOrEditMessage = EditMessage;
                $scope.newclient = Clients.get({clientId:id});
            }
            //when Add or Edit button is pressed.
            $scope.AddOrEdit = function (edit) {
                $scope.newclient.birthday = document.getElementById('birthdayinput').value;
                if (edit)
                    $scope.Edit();
                else
                    $scope.Add();
            }
            $scope.Add = function () {
                Clients.save($scope.newclient);
                $scope.closePopUpDialog();
            }
            $scope.Edit = function () {
                Clients.update($scope.newclient);
                $scope.edit = -1;
                $scope.closePopUpDialog();
            }
            /**
             * Функция очищающая форму
             */
            $scope.closePopUpDialog = function(){
                $scope.showPopUpDialog = false;
                document.getElementById('myForm').reset();
                $scope.clients = Clients.query();
                $route.reload();
            }
        }
    }
});
//Валидация ввода id
clientApp.directive('check', function () {
    return {
        require: 'ngModel',
        link: function($scope, element, attr, ClientList) {
            ClientList.$validators.check = function(modelValue, viewValue) {
                //attr(check) содержит Boolean переменную = ifEditThenTrue. Так как в js if(Boolean(false)) - true, следущее условие кажется
                //неплохим вариантом правильно проверить. конкатенируем с пустой строкой, если эта строка содержит букву 't'('true')\, то...
                if ((attr.check+'').indexOf('t')>-1){
                    return true//в случае, если на форме происходит изменение, то нам не надо проверять. возвращаем сразу true
                }
                $scope.ids = [];//массив idшников.
                $scope.clients.forEach(function(item) {
                    $scope.ids.push(item.id);//заполняем его
                });
                if (ClientList.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                var value = parseInt(viewValue);
                if (!$scope.ids.includes(value)) {
                    // it is valid
                    return true;//если наш список idшников не содержит введенного, то этот id уникален и разрешен ввод
                }
                // it is invalid
                return false;
            };
        }
    }
});