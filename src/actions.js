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

const subtypes = {
    "bot_message": "A message was posted by an integration",
    "channel_archive": "A message was posted by an integration",
    "channel_join": "A member joined a channel",
    "channel_leave": "A member left a channel",
    "channel_name": "A channel was renamed",
    "channel_purpose": "A channel purpose was updated",
    "channel_topic": "A channel topic was updated",
    "channel_unarchive": "A channel was unarchived",
    "file_comment": "A comment was added to a file",
    "file_mention": "A file was mentioned in a channel",
    "file_share": "A file was shared into a channel",
    "group_archive": "A group was archived",
    "group_join": "A member joined a group",
    "group_leave": "A member left a group",
    "group_name": "A group was renamed",
    "group_purpose": "A group purpose was updated",
    "group_topic": "A group topic was updated",
    "group_unarchive": "A group was unarchived",
    "me_message": "A /me message was sent",
    "message_changed": "A message was changed",
    "message_deleted": "A message was deleted",
    "message_replied": "A message thread received a reply",
    "pinned_item": "An item was pinned in a channel",
    "reply_broadcast": "(No longer served) A message thread's reply was broadcast to a channel",
    "thread_broadcast": "A message thread's reply was broadcast to a channel",
    "unpinned_item": "An item was unpinned from a channel"

}

module.exports = {
    assert: assert,
    acquireUserData: acquireUserData
}