/**
 * @module command/help
 * @description A module for adding the help command.
 */

const CMD = require('../command.js');

const command = new CMD.BaseCommand("help", CMD.Roles.SingleChannelGuest, (data) => {
    let client = data.Client,
        message = data.Message;
    client.sendMessage("$announce - not working\n$doathing - not working (close to being done though)\n$help - working but not preferred way yet; list commands\n$viewrepo - working; send repository link", message.channel);
});

module.exports = command;