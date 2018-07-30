/**
 * @module command
 * @description A module for commands.
 */
const slack = require("@slack/client");

/**
 * @class
 * @description Class representing a bot command.
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
 * @class
 * @description DataSet class to be passed to command functions.
 */
class DataSet {
    /**
     * Set data details.
     * @constructor
     * @param {MessageEvent} msg_event RTM Message Event
     * @param {RTMClient} client RTMClient
     * @param {WebClient} webclient WebClient
     */
    constructor(msg_event, client, webclient) {
        this.message = msg_event;
        /** @alias this.client this.rtmclient */
        this.client;
        this.rtmclient = this.rtmclient = client;
        this.webclient = webclient;
    }
}

/**
 * @enum Roles
 * @description Enumeration for authority.
 * @type {number}
 */
const Roles = {
    WorkspaceOwner: 4,
    WorkspaceAdmin: 3,
    Member: 2,
    MultiChannelGuest: 1,
    SingleChannelGuest: 0
};

Object.freeze(Roles);

module.exports = { BaseCommand, Roles, DataSet };