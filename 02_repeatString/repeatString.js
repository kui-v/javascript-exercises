const repeatString = function(string, repeatTimes) {
    if (repeatTimes >= 0) {
        return string.repeat(repeatTimes)
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
