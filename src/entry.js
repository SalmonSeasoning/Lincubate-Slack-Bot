/* https://www.npmjs.com/package/@slack/client */


const Slack = require("@slack/client"),
    { RTMClient } = Slack,
    token = process.env.SLACK_TOKEN, // (Environment Variable)
    rtm = new RTMClient(token),
    {DataSet} = require('./command.js'),
    actions = require('./actions.js'),
    commands = [];



commands.push(require('./commands/help.js'));


rtm.start();


rtm.on("message", (msg_event) => {

    if ((msg_event.subtype && msg_event.subtype === 'bot_message') ||
        (!msg_event.subtype && msg_event.user === rtm.activeUserId)) {
        return;
    }


    let data = new DataSet();
});