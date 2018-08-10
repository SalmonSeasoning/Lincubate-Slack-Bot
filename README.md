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

## Python Integration
While there's still plans on implementing Python, certain things still need to be worked out before
anything official happens. Like,
- is it secure?
- can it run side-by-side without issue?
- how easily can it be connected to Node.js?
- is it worth it?

With all of these questions in mind, it's difficult to try to find the right solution.
Right now the route of implementing Python seems low-priority but it's on the agenda.