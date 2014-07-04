/**
 * Created by Filinger on 7/4/2014.
 */
angular.module('adsLabs', ['hljs'])
    .directive('lab6', function () {
        return {
            restrict: 'E',
            scope: {
                listingUrl: '='
            },
            templateUrl: 'lab6.html'
        }
    })
    .service('BubbleSort', function () {
        this.sort = function (array) {
            var swapped;
            do {
                swapped = false;
                for (var i = 0; i < array.length - 1; i++) {
                    if (array[i] > array[i + 1]) {
                        var temp = array[i];
                        array[i] = array[i + 1];
                        array[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
            return array;
        };
    })
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
            if (array[i] !== array[0]) {
                uniqueNumbers++;
            }
            return uniqueNumbers;
        };

        $scope.$watch("inputToSort", function (newValue) {
            $scope.sortError = null;
            $scope.sortedArray = null;
            $scope.uniqueNumbers = null;

            if (newValue == null || newValue == undefined || newValue == '') {
                return;
            }

            try {
                $scope.arrayToSort = newValue.split(/[\s,]+/).map(toNumber);
                $scope.sortedArray = BubbleSort.sort($scope.arrayToSort);
                $scope.uniqueNumbers = countUniqueNumbers($scope.sortedArray);
            } catch (exception) {
                $scope.sortError = exception.message;
            }
        });
    });