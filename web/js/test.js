angular
    .module('Todo', [])
    .controller('CountCtrl', function CountCtrl() {
        this.count = 4;
    })
    .directive('counter', function counter() {
        return {
            scope: {},
            bindToController: {
                count: '='
            },
            controller: function () {
                function increment() {
                    this.count++;
                }
                function decrement() {
                    this.count--;
                }
                this.increment = increment;
                this.decrement = decrement;
            },
            controllerAs: 'counter',
            template: [
                '<div class="todo">',
                '<input type="text" ng-model="counter.count">',
                '<button type="button" ng-click="counter.decrement();">-</button>',
                '<button type="button" ng-click="counter.increment();">+</button>',
                '</div>'
            ].join('')
        };
    });

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, ['Todo']);
});
