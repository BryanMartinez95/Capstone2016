'use strict';

class Sort {
    constructor(column, isAscending) {
        if (!arguments.length) {
            this.column = '';
            this.isAscending = true;
        }
        else {
            this.column = column;
            this.isAscending = isAscending;
        }
    }
}
