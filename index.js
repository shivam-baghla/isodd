/**
 * Returns true {boolean} if the integer|integer in string format is odd, false{boolean} otherwise
 * @param {number | string} num
 * @returns {boolean}
 */
function isOdd(num){
    return num % 2 !== 0;
}

module.exports = isOdd;