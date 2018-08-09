/**
 * @module command/help
 * @description A module for adding the help command.
 */

const CMD = require('../command.js');

const command = new CMD.BaseCommand("help", CMD.Roles.WorkspaceAdmin, (data) => {
    let client = data.getRTMClient(),
        message = data.getMessage();
    client.sendMessage("Commands are an upcoming feature. Lol.", message.channel);
});

module.exports = command;