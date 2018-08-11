/**
 * @module command/announce
 * @description A module for "announce" command.
 */

const CMD = require('../command.js');

const command = new CMD.BaseCommand("announce", CMD.Roles.Developer, (data) => {    // CMD.Roles.Member
    // requires figuring out the Slack WebClient situation first...
});

module.exports = command;