# Lincubate-Slack-Bot
A Slack bot created and managed by [Lincubate Org](https://www.lincubate.org)

## Status
This bot is currently unstable and still a Work In Progress.
It can still be forked and used for it's OO implementations, of course.
It is not recommended this bot is used for anything at the moment.
Remember to check back again another time!

## Token
You can acquire your Bot User OAuth Token from __https://api.slack.com/apps/APP_ID/oauth?success=1__.
When you have it, you have 4 options.
1) Paste it directly into src/entry.js in between the quotes.
2) Put it as your environment variable. SLACK_TOKEN
3) Pass it into the `node .` command (it should be read as if it were an environment variable).
4) src/TOKEN.SECRET file. Configured in .gitignore to not be committed. (Recommended for contributors.)

## PyIntegrate
Node.js C++ Python integration is a Work In Progress and is currently Low Priority.
For information about it, view src/pyintegrate/README.md.
For status updates on it, view src/pyintegrate/STATUS.

More details will be added as progression furthers