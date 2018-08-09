/**
 * @module command/viewrepo
 * @description A module for responding to the user request with the official repository link.
 */

const CMD = require('../command.js');

const command = new CMD.BaseCommand("viewrepo", CMD.Roles.SingleChannelGuest, (data) => {
    let client = data.getRTMClient(),
        message = data.getMessage();
    client.sendMessage("Lincubot Repository: https://github.com/SalmonSeasoning/Lincubate-Slack-Bot", message.channel);
});

module.exports = command;