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
 * @param {string} id
 * @param {WebClient} webclient
 */
function acquireUserData(id, webclient) {
    assert(id !== undefined && id !== null && id !== ""
        && typeof id === "string");
    return webclient.users.info({id});
}
/**
 * @enum subtypes
 * @description Type of message subtypes
 */
const subtypes = {
    "bot_message": 0,
    "channel_archive": 1,
    "channel_join": 2,
    "channel_leave": 3,
    "channel_name": 4,
    "channel_purpose": 5,
    "channel_topic": 6,
    "channel_unarchive": 7,
    "file_comment": 8,
    "file_mention": 9,
    "file_share": 10,
    "group_archive": 11,
    "group_join": 12,
    "group_leave": 13,
    "group_name": 14,
    "group_purpose": 15,
    "group_topic": 16,
    "group_unarchive": 17,
    "me_message": 18,
    "message_changed": 19,
    "message_deleted": 20,
    "message_replied": 21,
    "pinned_item": 22,
    "reply_broadcast": 23,
    "thread_broadcast": 24,
    "unpinned_item": 25
}
Object.freeze(subtypes);

module.exports = {
    assert: assert,
    acquireUserData: acquireUserData,
    subtypes: messageSubtypes
}