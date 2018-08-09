/**
 * @module actions
 * @description A module for certain actions.
 */

/**
 * @function assert
 * @description Assert a certain condition is true.
 * @param {boolean} condition 
 */
function assert(condition) {
    if (!condition) {
        throw (new Error("Assert condition returned false."));
    }
}
/**
 * @function acquireUserData
 * @description Use WebClient to acquire user information via user ID.
 * @param {boolean} condition 
 */
function acquireUserData(id, webclient) {
    assert(id !== undefined && id !== null && id !== ""
        && typeof id === "string");
    return webclient.users.info(id);
}

module.exports = {
    assert: assert,
    acquireUserData: acquireUserData
}