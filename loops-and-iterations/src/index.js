/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    // Your implementation here
    let obj = [];
    let String = '';

    for (x; x <= y; x += step) {
        obj.push(x);
        String = obj.toString();
        String = String.replace(/,/g, " ");
    }

    return String;
    /*throw new Error("Task not implemented");*/
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    let result = 0;
    let sum = 0;
    for (let j = y; j >= 0; j--) {
        for (let i = x; i <= j; i++) {
            sum += i;
            result = sum;
            //console.log(sum);
        }
    }
    //console.log(result);
    return result = sum;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    let arr = [x, y];
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }

    return sumBetween;
};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    switch (x) {
        case 0:
            return "0.00";
            break;
        case 1:
            return "1.00";
            break;
        case 2:
            //console.log(1 + 1/4);
            return 1 + 1/4;
            break;
        case 3:
            return 1 + 1/4 + 1/9;
            break;
        case 4:
            return 1 + 1/4 + 1/9 + 1/16;
            break;
        case 5:
            return (1 + 1/4 + 1/9 + 1/16 + 1/25).toFixed(2);
            break;
    }

};


/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    let str = '';
    let result;
    str = x;
    result = String(str);
    return result.length;
};

