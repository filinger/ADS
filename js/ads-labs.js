/**
 * Created by Filinger on 7/4/2014.
 */
angular.module('adsLabs', ['hljs'])
    .directive('lab6', function () {
        return {
            restrict: 'E',
            templateUrl: 'lab6.html'
        }
    })
    .directive('lab3', function () {
        return {
            restrict: 'E',
            templateUrl: 'lab3.html'
        }
    })
    .service('BubbleSort', bubbleSortService)
    .controller('BubbleSortController', function ($scope, BubbleSort) {
        var toNumber = function (x) {
            return parseFloat(x);
        };

        var countUniqueNumbers = function (array) {
            var uniqueNumbers = 0;
            for (var i = 0; i < array.length - 1; i++) {
                if (array[i] !== array[i + 1]) {
                    uniqueNumbers++;
                }
            }
            if (array.length > 0) {
                uniqueNumbers++;
            }
            return uniqueNumbers;
        };

        $scope.$watch("inputToSort", function (newValue) {
            $scope.sortError = null;
            $scope.sortResult = null;
            $scope.uniqueNumbers = null;

            if (newValue == null || newValue == undefined || newValue == '') {
                return;
            }

            try {
                $scope.arrayToSort = newValue.split(/[\s,]+/).map(toNumber);
                $scope.sortResult = BubbleSort.sort($scope.arrayToSort);
                $scope.uniqueNumbers = countUniqueNumbers($scope.sortResult.array);
            } catch (exception) {
                $scope.sortError = exception.message;
            }
        });
    })
    .service('LinkedListService', linkedListService)
    .controller('LinkedListController', function ($scope, LinkedListService) {
        var toNumber = function (x) {
            return parseFloat(x);
        };

        var sumPolynomials = function (left, right) {
            $scope.sumError = null;
            $scope.sumResult = null;

            if (left == null || left == undefined || left == ''
                || right == null || right == undefined || right == '') {
                return;
            }

            try {
                var leftMembers = left.split(/[\s,]+/).map(toNumber);
                var rightMembers = right.split(/[\s,]+/).map(toNumber);
                $scope.sumResult = LinkedListService.sum(leftMembers, rightMembers);
            } catch (exception) {
                $scope.sumError = exception.message;
            }
        };

        $scope.$watchGroup(['leftPolynomial', 'rightPolynomial'], function (newValues) {
            sumPolynomials(newValues[0], newValues[1]);
        });
    });