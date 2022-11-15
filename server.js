const cron = require("node-cron");

// scheduling a task of logging hello on console at 10:56 am everyday of every month at thursday :
cron.schedule(
  "0-10 3 17 * * monday",
  () => {
    const time = new Date();
    console.log(`hello ! time right now is ${time.toLocaleTimeString()}`);
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);
