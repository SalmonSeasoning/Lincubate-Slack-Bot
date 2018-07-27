// command types

class BaseCommand {
    constructor(name, auth, todo) {
        this.name = name;
        this.auth = auth;
        this.todo = todo;
    }
    call(data) {
        if (data instanceof DataSet) {
            this.todo(data);
        } else {
            throw (new Error("Invalid object type. Expected DataSet."));
        }
    }
}

class BotAdminCommand extends BaseCommand {
    constructor(name, auth, todo) {
        // bot administrator commands = commands that manage the bot ONLY (disallow eval)
        super(name, auth, todo);
    }
}

// data set
class DataSet {
    constructor(msg_event, client) {
        this.msg_event = msg_event;
        this.client = client;
    }
}

// user roles
const Roles = {
    WorkspaceOwner: 4,
    WorkspaceAdmin: 3,
    Member: 2,
    MultiChannelGuest: 1,
    SingleChannelGuest: 0
};

// prevent modification
Object.freeze(Roles);

module.exports = { BaseCommand, BotAdminCommand, Roles, DataSet };