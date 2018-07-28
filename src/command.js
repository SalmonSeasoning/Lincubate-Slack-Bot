/**
 * @module command
 * @description A module for commands.
 */
const slack = require('@slack/client')

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
 * Class extending BaseCommand. Strictly for Bot Administrators. These should NOT be allowed to modify usage in Workspaces!
 * @class
 * @extends BaseCommand
 * @description Command restricted to Bot Administrators. Should not have any ability to interact in Workspaces.
 */
class BotAdminCommand extends BaseCommand {
    /**
     * Set command details.
     * @constructor
     * @param {string} name Name of the command.
     * @param {number} auth Number (see Roles) representing authority.
     * @param {function} todo Function to run when command is called by authority.
     */
    constructor(name, auth, todo) {
        super(name, auth, todo);
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
     * @param {MessageEvent.auth} client RTM Message Event Author
     */
    constructor(msg_event, client) {
        this.msg_event = msg_event;
        this.client = client;
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

module.exports = { BaseCommand, BotAdminCommand, Roles, DataSet };