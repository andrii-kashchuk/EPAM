/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    let strLength = str.length;
    //console.log(strLength);
    let count = symbolsCount;
    let end = str.slice(-count);

    if (count > strLength) {
        console.log(str);
        return str;
    } else {

        console.log(end + str + end);
        return end + str + end;
    }

};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    let z_minus_x = z - x; // 78
    let z_minus_y = z - y; // -22

    if (z_minus_x < 0 && z_minus_x > 0) {
        z_minus_x = z_minus_x * - 1;
    }

    if (z_minus_y < 0 && z_minus_x > 0) {
        z_minus_x = z_minus_x * - 1;
    }
    //console.log(z_minus_x);
    //console.log(z_minus_y);
    if (z_minus_x > z_minus_y) {
        console.log(x);
        return x;
    } else {
        console.log(y);
        return y;
    }
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    let work = arr;
    return work.filter((item, index) => work.indexOf(item) === index);
};
