/**
 * @module command/announce
 * @description A module for "announce" command.
 */

const CMD = require('../command.js');

const command = new CMD.BaseCommand("announce", CMD.Roles.Developer, (data) => {    // CMD.Roles.Member
    let client = data.Client,
        message = data.Message;
    client.sendMessage("This command is proving quite difficult to implement because the Slack API for Node.js is a pain to read.", message.channel);
});

module.exports = command;