const sumAll = function(start, end) {
    let sum = 0
    // case that the larger number is the first arg
    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    if (typeof start != "number" || typeof(end) != "number") {
        return 'ERROR';
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
