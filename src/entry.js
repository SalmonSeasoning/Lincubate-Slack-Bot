/* https://www.npmjs.com/package/@slack/client */

const Slack = require("@slack/client"),
    { RTMClient, WebClient } = Slack,
    fs = require("fs"),
    token = "" || process.env.SLACK_TOKEN || fs.readFileSync("./src/TOKEN.SECRET", "utf-8"), // Direct Token / Env Var / File
    rtm = new RTMClient(token),
    web = new WebClient(token),


    botPrefix = '$',    // See README.md for bot prefix.


    { DataSet } = require("./command.js"),
    { assert } = require("./actions.js"),
    commands = require("./commands/index.js");

rtm.start();

rtm.on("ready", () => {
    console.log("The bot is online!");
});

rtm.on("message", (message) => {
    // avoid responding to messages by another bot or by self (restrict to only new messages)
    if ((message.subtype && message.subtype === 'bot_message') ||
        (!message.subtype && message.user === rtm.activeUserId) ||
        !message.text) return;

    // create text and arguments for later
    let text = message.text, args = text.split(' ');

    // check if command
    if (args[0].toLowerCase().startsWith(botPrefix.toLowerCase())) {
        // the message should be interpreted as a command
        let reqCommand = args[0].substring(botPrefix.length),
            data = new DataSet(message, rtm, web);
        
        for(command in commands) {
            if(reqCommand === command) {
                console.log(command);
                console.log(commands[command]);
                command.call(data);
                break;
            }
        }
        
        
        
    } else return;
});