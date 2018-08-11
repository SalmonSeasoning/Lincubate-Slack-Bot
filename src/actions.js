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
const subtypes = {
    /**
     * @type {number}
     * @description A message was posted by an integration.
     */
    "bot_message": 0,
    /**
     * @description A channel was archived.
     */
    "channel_archive": 1,
    /**
     * @description A member joined a channel.
     */
    "channel_join": 2,
    /**
     * @description A member left a channel.
     */
    "channel_leave": 3,
    /**
     * @description A channel was renamed.
     */
    "channel_name": 4,
    /**
     * @description A channel purpose was updated.
     */
    "channel_purpose": 5,
    /**
     * @description A channel topic was updated.
     */
    "channel_topic": 6,
    /**
     * @description A channel was unarchived.
     */
    "channel_unarchive": 7,
    /**
     * @description A comment was added to a file.
     */
    "file_comment": 8,
    /**
     * @description A file was mentioned in a channel.
     */
    "file_mention": 9,
    /**
     * @description A file was shared into a channel.
     */
    "file_share": 10,
    /**
     * @description A group was archived.
     */
    "group_archive": 11,
    /**
     * @description A member joined a group.
     */
    "group_join": 12,
    /**
     * @description A member left a group.
     */
    "group_leave": 13,
    /**
     * @description A group was renamed.
     */
    "group_name": 14,
    /**
     * @description A group purpose was updated.
     */
    "group_purpose": 15,
    /**
     * @description A group topic was updated.
     */
    "group_topic": 16,
    /**
     * @description A group was unarchived.
     */
    "group_unarchive": 17,
    /**
     * @description A /me message was sent.
     */
    "me_message": 18,
    /**
     * @description A message was changed.
     */
    "message_changed": 19,
    /**
     * @description A message was deleted.
     */
    "message_deleted": 20,
    /**
     * @description A message thread received a reply.
     */
    "message_replied": 21,
    /**
     * @description An item was pinned in a channel.
     */
    "pinned_item": 22,
    /**
     * @description (No longer served) A message thread's reply was broadcast to a channel.
     */
    "reply_broadcast": 23,
    /**
     * @description A message thread's reply was broadcast to a channel.
     */
    "thread_broadcast": 24,
    /**
     * @description An item was unpinned from a channel.
     */
    "unpinned_item": 25
}
Object.freeze(subtypes);

module.exports = {
    assert: assert,
    acquireUserData: acquireUserData,
    subtypes: messageSubtypes
}