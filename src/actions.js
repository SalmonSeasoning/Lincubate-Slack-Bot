/**
 * @module actions
 * @description A module for certain actions.
 */

/**
 * @function assert
 * @description Assert a certain condition is true.
 * @param {boolean} condition Any condition which will return 1/0/true/false.
 */
function assert(condition) {
    if (!condition) {
        throw (new Error("Assert condition returned false."));
    }
}

/**
 * @function acquireUserData
 * @description Use WebClient to acquire user information via user ID.
 * @param {string} id ID of the targeted user.
 * @param {WebClient} webclient WebClient object to make the request with.
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
const messageSubtypes = {
    /**
     * @type {number}
     * @description A message was posted by an integration.
     */
    "bot_message": 0,
    /**
     * @type {number}
     * @description A channel was archived.
     */
    "channel_archive": 1,
    /**
     * @type {number}
     * @description A member joined a channel.
     */
    "channel_join": 2,
    /**
     * @type {number}
     * @description A member left a channel.
     */
    "channel_leave": 3,
    /**
     * @type {number}
     * @description A channel was renamed.
     */
    "channel_name": 4,
    /**
     * @type {number}
     * @description A channel purpose was updated.
     */
    "channel_purpose": 5,
    /**
     * @type {number}
     * @description A channel topic was updated.
     */
    "channel_topic": 6,
    /**
     * @type {number}
     * @description A channel was unarchived.
     */
    "channel_unarchive": 7,
    /**
     * @type {number}
     * @description A comment was added to a file.
     */
    "file_comment": 8,
    /**
     * @type {number}
     * @description A file was mentioned in a channel.
     */
    "file_mention": 9,
    /**
     * @type {number}
     * @description A file was shared into a channel.
     */
    "file_share": 10,
    /**
     * @type {number}
     * @description A group was archived.
     */
    "group_archive": 11,
    /**
     * @type {number}
     * @description A member joined a group.
     */
    "group_join": 12,
    /**
     * @type {number}
     * @description A member left a group.
     */
    "group_leave": 13,
    /**
     * @type {number}
     * @description A group was renamed.
     */
    "group_name": 14,
    /**
     * @type {number}
     * @description A group purpose was updated.
     */
    "group_purpose": 15,
    /**
     * @type {number}
     * @description A group topic was updated.
     */
    "group_topic": 16,
    /**
     * @type {number}
     * @description A group was unarchived.
     */
    "group_unarchive": 17,
    /**
     * @type {number}
     * @description A /me message was sent.
     */
    "me_message": 18,
    /**
     * @type {number}
     * @description A message was changed.
     */
    "message_changed": 19,
    /**
     * @type {number}
     * @description A message was deleted.
     */
    "message_deleted": 20,
    /**
     * @type {number}
     * @description A message thread received a reply.
     */
    "message_replied": 21,
    /**
     * @type {number}
     * @description An item was pinned in a channel.
     */
    "pinned_item": 22,
    /**
     * @type {number}
     * @description (No longer served) A message thread's reply was broadcast to a channel.
     */
    "reply_broadcast": 23,
    /**
     * @type {number}
     * @description A message thread's reply was broadcast to a channel.
     */
    "thread_broadcast": 24,
    /**
     * @type {number}
     * @description An item was unpinned from a channel.
     */
    "unpinned_item": 25
}
Object.freeze(messageSubtypes);

module.exports = {
    assert: assert,
    acquireUserData: acquireUserData,
    subtypes: messageSubtypes
}