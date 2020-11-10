# VLC auto shutdown [Win10]

This allows you to watch whatever you want on VLC and when video ends and VLC closes this will shut down your PC.

## Why do u need it? 🤔

- This is very useful if u watch anything on TV and u going to sleep and due to this u don't need to shut down PC manually.
- You can also change name of process in config.js so this can be used for any app running on your PC.
- Also this is under MIT Licence so u can do anything with code and make ur own projects with that.


## Installation 🚀

- Requirements for installation:
  - [Node.js](https://nodejs.org/)
  - [npm](https://www.npmjs.com/get-npm) (installed with Node.js)

1. Download last [vlc-auto-shutdown release](https://github.com/JakubSladek/vlc-auto-shutdown/releases)
2. Unzip folder and grab it where do you want
3. Double click on install.bat and wait for all modules to install
4. (suggestion) Make a shortcut of start.bat on your desktop or anywhere you want for better access


## How to use 😎

- Be sure you have checked "Quit at the end of playlist" option under Media in VLC
- Double click on start.bat or your shortcut
- If u have VLC turned on this will tell you every 10s(by default) that VLC is still running
- When VLC closes then this will wait 15s(by default) while you can press any key to abort shutdown and close this script


## Configuration (optional) 🤓

##### For configuration you will need any text editor, you can use Notepad if u don't have anthing else.

- Change check interval: open config.js and change check_interval_timeout value to number in seconds that u want to use.

- Change shutdown timeout: open config.js and change shutdown_timeout value to number in seconds that u want to use.

- Change process name: open config.js and change process_name to name of process that u want to use, for better documentation of finding process look at [find process](https://github.com/yibn2008/find-process)
