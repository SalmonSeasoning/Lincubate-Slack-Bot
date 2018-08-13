/* https://www.npmjs.com/package/@slack/client */

const Slack = require("@slack/client"),
    { RTMClient, WebClient, ErrorCode } = Slack,
    fs = require("fs"),
    token = "" || process.env.SLACK_TOKEN || fs.readFileSync("./src/TOKEN.SECRET", "utf-8"), // Direct Token / Env Var / File
    rtm = new RTMClient(token),
    web = new WebClient(token, { rejectRateLimitedCalls: true }),


    botPrefix = '$',    // See README.md for bot prefix.


    { DataSet, BaseCommand } = require("./command.js"),
    { assert, acquireUserData } = require("./actions.js"),
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


    /*
    
        api.slack.com/events/message

        check subtypes so that a message event
        isn't mistaken for a new message
    
    */



    let text = message.text, args = text.split(' ');

    // check if command
    if (args[0].toLowerCase().startsWith(botPrefix.toLowerCase())) {
        // the message should be interpreted as a command
        let reqCommand = args[0].substring(botPrefix.length);

        for (command in commands) {
            if (reqCommand.toLowerCase() === command.toLowerCase()) {
                acquireUserData(message.user, web).then((slackReturnData)=>{
                    if(user.ok === false) {
                        throw(new Error("Oops! Something went wrong. acquireUserData() returned data but has failed."));
                    }
                    let shiftedText = String(text);
                    shiftedText = shiftedText.split(' ');
                    shiftedText.shift();
                    shiftedText = shiftedText.join(' ');
                    dataset = new DataSet(message, shiftedText, rtm, web, slackReturnData.user);
                    console.log(`${message.user} : ${command} [${new Date()}]`);
                    commands[command].call(dataset);
                }, (err)=>{
                    let shiftedText = String(text);
                    shiftedText = shiftedText.split(' ');
                    shiftedText.shift();
                    shiftedText = shiftedText.join(' ');
                    dataset = new DataSet(message, shiftedText, rtm, web, null);
                    commands[command].call(dataset);
                    console.log(`${message.user} [${new Date()}] FAILED TO GET INFO.\nPRECEDING ERROR: ${err}`);
                });
                break;
            }
        }
    } else return;
});