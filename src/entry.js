/* https://www.npmjs.com/package/@slack/client */

const Slack = require("@slack/client"),
    { RTMClient, WebClient } = Slack,
    token = "xoxb-403606878167-406579482658-QDQdQzBjjhkSahTucGwuzVF0" || process.env.SLACK_TOKEN, // String Token / Get Token from Environment Variables
    rtm = new RTMClient(token),
    web = new WebClient(token),
    botPrefix = '$', // DON'T use the '/' (it will conflict with Slack's own self-integrated SlackBot)
    { DataSet } = require("./command.js"),
    { assert } = require("./actions.js"),
    commands = [];

commands.push(require("./commands/help.js"));

rtm.start();

rtm.on("ready", () => {
    console.log("The bot is online!");
});

rtm.on("message", (message) => {
    // avoid responding to messages by another bot or by self
    if ((message.subtype && message.subtype === 'bot_message') ||
        (!message.subtype && message.user === rtm.activeUserId)) {
        return;
    }

    // create text and arguments for later
    let text = message.text, args = text.split(' ');

    // check if command
    if (args[0].toLowerCase().startsWith(botPrefix.toLowerCase())) {
        // the message should be interpreted as a command
        let reqCommand = args[0].substring(botPrefix.length);

        // temporary non-OO bound command
        if(reqCommand.toLowerCase() === "hello") {
            rtm.sendMessage('Hello!', message.channel);
        }


        let data = new DataSet(message, rtm, web);

    }
});