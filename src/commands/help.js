/**
 * @module command/help
 * @description A module for adding the help command.
 */

const CMD = require('../command.js');

const command = new CMD.BaseCommand("help", CMD.Roles.WorkspaceAdmin, (data) => {

});

module.exports = command;