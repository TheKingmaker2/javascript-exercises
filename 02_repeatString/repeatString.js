const repeatString = function(string, num) {
    let counter = 1;
    let retString = "";
    if (num < 0) {
        return "ERROR";
    }
    while (counter <= num) {
        retString += string;
        counter++;
    }
    return retString;
};

// Do not edit below this line
module.exports = repeatString;
