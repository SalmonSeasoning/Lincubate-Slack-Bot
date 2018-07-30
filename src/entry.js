/* https://www.npmjs.com/package/@slack/client */


const Slack = require("@slack/client"),
    { RTMClient } = Slack,
    token = "" || process.env.SLACK_TOKEN, // String Token / Get Token from Environment Variables
    rtm = new RTMClient(token),
    //web = new WebClient(token),           Not currently defined for some reason... Deal with another time. Not required yet.
    {DataSet} = require("./command.js"),
    actions = require("./actions.js"),
    commands = [];



commands.push(require("./commands/help.js"));


rtm.start();

rtm.on("ready", ()=>{
    console.log("The bot is online!");
});

rtm.on("message", (message) => {

    if ((message.subtype && message.subtype === 'bot_message') ||
        (!message.subtype && message.user === rtm.activeUserId)) {
        return;
    }

    if(message.text == "Hello Lincubot!"){
        rtm.sendMessage("hello!", message.channel).then(()=>{console.log("message sent successfully")});
    }

    let data = new DataSet();
});