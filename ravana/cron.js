const CronJob = require("cron").CronJob;

const { dumpVehicle } = require("./helpers/cron/index");

new CronJob(
  "*/20 * * * * *",
  function () {
    dumpVehicle.dumpVehicle();
  },
  null,
  true,
  "Asia/Kolkata"
);
