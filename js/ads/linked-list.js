var linkedListService = function () {
    var toMember = function (value) {
        if (value !== undefined && value !== null && !isNaN(value)) {
            return value;
        } else {
            return 0;
        }
    };

    this.sum = function (left, right) {
        var result = [];
        for (var i = 0; i < left.length || i < right.length; ++i) {
            var leftMember = toMember(left[i]);
            var rightMember = toMember(right[i]);
            result.push(leftMember + rightMember);
        }
        return result;
    }
};
