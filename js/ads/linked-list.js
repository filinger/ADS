function LinkedList() {
    this.start = null;
    this.end = null;
    this.add = function (data) {
        if (this.start === null) {
            this.start = LinkedList.makeNode();
            this.end = this.start;
        }
        else {
            this.end.next = LinkedList.makeNode();
            this.end = this.end.next;
        }
        this.end.data = data;
    };
}

LinkedList.makeNode = function () {
    return {data: null, next: null};
};

LinkedList.fromArray = function (array) {
    var list = new LinkedList();
    for (var i = 0; i < array.length; ++i) {
        list.add(array[i]);
    }
    return list;
};

var linkedListService = function () {
    var toMember = function (value) {
        if (value !== undefined && value !== null && !isNaN(value)) {
            return value;
        } else {
            return 0;
        }
    };

    this.sum = function (left, right) {
        var leftList = LinkedList.fromArray(left);
        var rightList = LinkedList.fromArray(right);

        var result = [];
        for (var i = 0; i < left.length || i < right.length; ++i) {
            var leftMember = toMember(left[i]);
            var rightMember = toMember(right[i]);
            result.push(leftMember + rightMember);
        }
        return result;
    }
};
