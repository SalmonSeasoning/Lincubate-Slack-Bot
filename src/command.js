/**
 * @module command A module for commands.
 */
const slack = require("@slack/client");

/**
 * @class Class representing a bot command.
 */
class BaseCommand {
    /**
     * Set command details.
     * @constructor
     * @param {string} name Name of the command.
     * @param {number} auth Number (see Roles) representing authority.
     * @param {function} todo Function to run when command is called by authority.
     */
    constructor(name, auth, todo) {
        this.name = name;
        this.auth = auth;
        this.todo = todo;
    }
    /**
     * Call the command function.
     * @function call
     * @param {DataSet} data Data instanceof DataSet passed.
     */
    call(data) {
        if (data instanceof DataSet) {
            this.todo(data);
        } else {
            throw (new Error("Invalid object type. Expected DataSet."));
        }
    }
}

/**
 * Class holding the data that will be passed along to a command function.
 * @class DataSet class to be passed to command functions.
 */
class DataSet {
    /**
     * Set data details.
     * @constructor
     * @param {MessageEvent} msg_event RTM Message Event
     * @param {RTMClient} client RTMClient
     * @param {WebClient} webclient WebClient
     * @param {string} txt The raw text (excluding prefix + command) of Message
     * @param {Object} userdata The UserData from the WebClient
     */
    constructor(msg_event, txt, client, webclient, userdata) {
        this.message = msg_event;
        /** @alias this.client this.rtmclient */
        this.client;
        this.rtmclient = this.rtmclient = client;
        this.webclient = webclient;
        this.userdata = userdata;
        this.text = txt;
    }
    /**
     * @function getClient
     * @alias getRTMClient
     * @description Return RTMClient.
     */
    get getClient() {
        return this.client;
    }
    /**
     * @function getRTMClient
     * @alias getClient
     * @description Return RTMClient.
     */
    get getRTMClient() {
        return this.client;
    }
    /**
     * @function getWebClient
     * @description Return WebClient.
     */
    get getWebClient() {
        return this.webclient;
    }
    /**
     * @function getMessage
     * @description Return message event.
     */
    get getMessage() {
        return this.message;
    }
    /**
     * @function getText
     * @description Return text from Message event.
     */
    get getText() {
        return this.text;
    }
    /**
     * @function getUserData
     * @description Return UserData from Message.
     */
    get getUserData() {
        return this.userdata;
    }
}

/**
 * @enum Roles
 * @description Enumeration for authority.
 * @type {number}
 */
const Roles = {
    /**
     * @description Is a Workspace Owner. Provide maximum access to bot features. Control all permissions, even admins'.
     */
    WorkspaceOwner: 4,
    /**
     * @description Is a Workspace Admin. Provide access to everything but owner-specific features. Control all permissions.
     */
    WorkspaceAdmin: 3,
    /**
     * @description Is a standard member. Restrict to standard commands. Control permissions for SingleChannelGuests.
     */
    Member: 2,
    /**
     * @description Guest. Restrict to very simple commands.
     */
    MultiChannelGuest: 1,
    /**
     * @description Guest. Potentially untrustable. Same as MultiChannelGuest, permissions can be managed by Member.
     */
    SingleChannelGuest: 0,
    /**
     * Further information: This is not an official Slack role but a self-assigned role given to users with the rank
     * to manage other users' bot permissions. (Meaning Owner->Admin and below, Admin->Member and below, Member->SingleChannelGuest)
     * Since this is not an official role, a list of users must be stored in an array and that array must be checked to see if they are
     * considered a violator. There isn't much reason for this to be here as you can get by while completely ignoring it, but it's here
     * just for listing/identification purposes regarding commands and for allowing more possiblilities for such a restriction to be
     * implemented.
     * @description Violator. Do not accept ANY command requests. (Only given to users by a higher permission managing entity)
     */
    Violator: -1
};

Object.freeze(Roles);

module.exports = { BaseCommand, Roles, DataSet };