const { exec } = require("shelljs");
const find = require("find-process");
const { process_name, shutdown_timeout, check_interval_timeout } = require("../config/config");
const process_name_rendered = process_name.split(".")[0];

const checkVLC = async () => {
  let list = await find("name", process_name, false);

  const time = new Date().toLocaleTimeString();

  console.clear();

  if (list.length) {
    return console.log(`[${time}] ${process_name_rendered} still runnning`);
  }

  clearInterval(AutoCheck);

  console.log(`[${time}] ${process_name_rendered} not running, this device is turning off in ${shutdown_timeout}s.`);

  setTimeout(() => {
    exec("shutdown /s /f /t 3");
  }, shutdown_timeout * 1000);

  console.log("Press any key to abort..");

  // Abort shutdown on key press
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", () => {
    console.log("\nShutdown cancelled..");
    setTimeout(() => process.exit(0), 1000);
  });
};

console.clear();
console.log(`Successfully started, VLC will be checked every ${check_interval_timeout}s..`);

const AutoCheck = setInterval(() => checkVLC(), check_interval_timeout * 1000);
