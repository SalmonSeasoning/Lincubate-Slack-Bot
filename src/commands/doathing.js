/**
 * @module command/doathing
 * @description A module for "doathing" command. (Memes)
 */

const CMD = require('../command.js'),
    https = require('https'),
    redditURL = "https://www.reddit.com/r/memes/random.json",
    limit = 1;

const command = new CMD.BaseCommand("doathing", CMD.Roles.Developer, (data) => {    // CMD.Roles.SingleChannelGuest
    let client = data.Client,
        message = data.Message;
    client.sendMessage("Need to figure out Reddit API first, hold my juice box.", message.channel);
    /*https.get(redditURL + '?limit=' + limit, (response)=>{
        response.on('data', (d)=>{
            // TODO
        });
        response.on('error', (err)=>{
            // TODO
        });
    });*/
});

module.exports = command;