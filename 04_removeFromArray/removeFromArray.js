const removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        arr = arr.filter(
            (x) => x !== arguments[i]
        );
        console.log(arr);
        // let index = arr.indexOf(arguments[i]);
        // arr.splice(index, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
