/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    let sum;
    let result;
    sum = number1 + number2;
    if (sum < 1 && sum > 0) {
        sum = ((sum.toFixed(1)) * 1);
        console.log(sum);
        return sum;
    } else {
        result = (sum.toFixed(0) * 1);
        console.log(result);
        return result;
    }

};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
     return 'Hello, my name is ' + name + ' ' + surname + ' and I am ' + age + ' years old.';
 };

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    let result = Math.sqrt(x);
    let bool = Number.isInteger(result);
    if (bool === true) {
        return bool;
    } else {
        return bool;
    }
};


