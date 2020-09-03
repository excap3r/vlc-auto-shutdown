# VLC auto shutdown

This allows you to watch whatever you want on VLC and when video ends and VLC closes this will shut down your pc.

## Why do u need it?

- This is very useful if u watch anything on TV and u going to sleep and due to this u don't need to shut down PC manually.
- You can also change name of process in config.js so this can be used for any app running on your PC.
- Also this is under MIT Licence so u can do anything with code and make ur own projects with that.


## Installation

1. Download vlc-auto-shutdown from github
2. Unzip folder and grab it where do you want
3. Double click on install.bat and wait for all modules to install
4. Now just move "VLC Turn off" shortcut to your Desktop or anywhere where you want for better access (optional)


## How to use

- Double click at "VLC turn off" shortcut
- Now if u have VLC turned on this will inform you every 10s by default that VLC is still running in CMD
- If VLC closes then this will wait 15s while you can press any key to abort shutdown and close this script, otherwise PC will shutdown in 3s.


## Configuration (optional)

##### For configuration you will need any text editor, you can use Notepad if u don't have anthing else.

- Change check interval: open config.js and change check_interval_timeout value to number in seconds that u want to use.

- Change shutdown timeout: open config.js and change shutdown_timeout value to number in seconds that u want to use.

- Change process name: open config.js and change process_name to name of process that u want to use, for better documentation of finding process look at [find process](https://github.com/yibn2008/find-process)
