var bubbleSortService = function () {
    this.sort = function (array) {
        var comparesCount = 0;
        var swapsCount = 0;
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    var temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                    swapsCount++;
                }
                comparesCount++;
            }
        } while (swapped);
        return { array: array, comparesCount: comparesCount, swapsCount: swapsCount };
    }
};