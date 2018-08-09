# How will PyIntegrate work once finished?

Of course, it's still in the contemplation stage, but it's planned to work a little something like this:

src/commands/myCommand.py
```python
print('Hallo und guten tag!')
```

src/commands/index.js
```javascript
module.exports = {
  myCommand: require('pyintegrate').run('./myCommand.py'), // returns Promise; resolves once process done or self-indicated
  ...
}
```

Where .run() will return a Promise that will resolve at EOL (if configured to), will resolve at process exit (meaning it will
run a child process and wait for it to end), or will resolve when specifically told by the script to resolve by running
`finish()`.......

This may take some time to implement, and this is just the beginning, but this is how it's planned to end up.
