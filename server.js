const cron = require("node-cron");

// scheduling a task of logging hello on console at 10:56 am everyday of every month at thursday :
cron.schedule(
  "0 56 10 * * thursday",
  () => {
    console.log("hello");
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);
