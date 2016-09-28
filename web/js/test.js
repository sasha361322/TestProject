var app = angular.module('form-example1', []);

app.controller('MyCtrl', function ($scope) {
    $scope.arr=[1,2,3];
});

app.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function($scope, elm, attrs, MyCtrl) {
            MyCtrl.$validators.integer = function(modelValue, viewValue) {
                if (MyCtrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                // if (parseInt(viewValue) > 2) {
                if (!$scope.arr.includes(parseInt(viewValue))) {
                    // it is valid
                    return true;
                }

                // it is invalid
                return false;
            };
        }
    };
});

app.directive('username', function($q, $timeout) {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, MyCtrl) {
            var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

            MyCtrl.$asyncValidators.username = function(modelValue, viewValue) {

                if (MyCtrl.$isEmpty(modelValue)) {
                    // consider empty model valid
                    return $q.when();
                }

                var def = $q.defer();

                $timeout(function() {
                    // Mock a delayed response
                    if (usernames.indexOf(modelValue) === -1) {
                        // The username is available
                        def.resolve();
                    } else {
                        def.reject();
                    }

                }, 2000);

                return def.promise;
            };
        }
    };
});