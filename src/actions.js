/**
 * @module actions
 * @description A module for certain actions.
 */

/**
 * @function
 * @description Assert a certain condition is true.
 * @param {boolean} condition 
 */
function assert(condition) {
    if (!condition) {
        throw (new Error("Assert condition returned false."));
    }
}

module.exports = {
    assert: assert
}