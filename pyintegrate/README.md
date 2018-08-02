Python Integration with Lincubate Slack Bot
is built by implementing the available Python
header(s) into a compiled C++ Node Addon.

It is only recommended that you use Python if
absolutely necessary. If it is not necessary,
it is recommended to stick to JavaScript or
TypeScript.

Python must be installed on the target machine
(correctly) in order to execute Python code. It
is not ensured that everything will be 100% stable
especially if asynchronous.

The version of Python being used is completely
dependant on the version installed on the target
machine as the 'main version'. Meaning if Python
3.7 is installed, it will be the version being
used (called by "Python.h"; see Python.org docs).

Also: If you're looking for documentation, Sean,
JSDoc does not support C++ so if you really want
it for this, you'll have to do it yourself.
