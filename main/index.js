const find = require("find-process");
const { exec } = require("shelljs");
const { process_name, shutdown_timeout, check_interval_timeout } = require("../config/config");

const process_name_rendered = process_name.includes(".") ? process_name.split(".")[0] : process_name;

const checkVLC = async () => {
  const time = new Date().toLocaleTimeString();
  const list = await find("name", process_name, false);

  console.clear();

  if (list.length) return console.log(`[${time}] ${process_name_rendered} is still runnning.`);

  if (AutoCheck) clearInterval(AutoCheck);

  console.log(`[${time}] ${process_name_rendered} not running, this device is will be turned off after ${shutdown_timeout}s.`);

  const shutdown = setTimeout(() => {
    exec("shutdown /s /f /t 3");
  }, shutdown_timeout * 1000);

  console.log("Press any key to abort..");

  // Abort shutdown on key press
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", () => {
    clearTimeout(shutdown);
    console.log("\nShutdown cancelled..");
    setTimeout(() => process.exit(0), 1500);
  });
};

console.clear();
console.log(`Running, ${process_name_rendered} will be checked after ${check_interval_timeout} sec..`);

const AutoCheck = setInterval(() => checkVLC(), check_interval_timeout * 1000);