# List of TODOs

### Permissions
Commands need to be limited to the user's status in the Workspace.
So far the Roles object contains the permission names and their
hierarchal value, but the command interpreter fails to check their
Workspace status before running the command.

### Workspace and User Cache
(**IMPORTANT!**) So requests don't eat up internet trying to reach data
that was previously retrieved already. Max Age per Cache: 20 minutes.

### Customized Permissions
Extending the TODO for Permissions, a list of custom permission sets
would be essential for developmental purposes regarding bot-sensitive
or Workspace-sensitive commands.

### announce.js
DM every member in the Workspace a message. Should be accessible to
Workspace Admins and Owners only.

### doathing.js
Find a random post from Reddit's [r/memes](https://www.reddit.com/r/memes)
and post it.

### help.js
Cycle through each command and append its name and description
to a variable before parsing the variable as a proper String and
sending the message accordingly.

### More commands
What use is this bot without more commands? I'm not a creative person,
so command suggestions are always accepted! Well, accepted as in 'taken',
some may not be appropriate to implement or may prove to be way too
difficult.

### More easy SlackAPI commands
`acquireUserData()` is a really useful command. So it might be worth
adding in more Slack API commands to **actions.js**. That way adding
more commands becomes easier with time.

### Discord.js equivalent
Host the Lincubate-Slack-Bot also as a Lincubate-Discord-Bot. This
could end up being a very cool addition. More than likely, this will
never happen or it will be separated into a new repository, but still
might be worth mentioning here.

### C/C++ or C# or Go conversion
Under the right circumstances, it might be worth porting the bot over
to C/C++ or even Go. The Slack API is a pain, but one can probably be
developed better than the official ones. All of the listed languages
support multithreading or multiprocessing as well as the use of
self-manipulated memory management allowing for way better optimization
regarding speed and memory usage.