/* https://www.npmjs.com/package/@slack/client */

// defining global constants
const Slack = require("@slack/client"),
    { RTMClient } = Slack,
    token = process.env.SLACK_TOKEN, // (Environment Variable)
    rtm = new RTMClient(token),
    {DataSet} = require('./command.js'),
    commands = [];



// defining functions
function assert(condition) {
    if (!condition) {
        throw (new Error("Assert() condition returned false."));
    }
}

// including commands
commands.push(require('./commands/help.js'));

// initializing the RTMClient
rtm.start();

// on message-sent
rtm.on("message", (msg_event) => {
    let data = {};
});