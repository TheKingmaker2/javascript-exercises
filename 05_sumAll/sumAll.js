const sumAll = function(int1, int2) {
    if ((int1 < 0) || (int2 < 0)) {
        return "ERROR";
    }

    if ((typeof(int1) != "number") || (typeof(int2) != "number")) {
        return "ERROR";
    }
    
    let sum = 0;
    if (int1 < int2) {
        let counter = 0;
        for (counter = int1; counter <= int2; counter++) {
            sum += counter;
        }
        return sum;
    } else if (int1 > int2) {
        let counter = 0;
        let sum = 0;
        for (counter = int2; counter <= int1; counter++) {
            sum += counter;
        }
        return sum;
    } else {
        sum = int1;
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
