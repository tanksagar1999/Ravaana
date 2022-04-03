const vehincleServices = require("../../apis/vehicle_detail/vehicle.services");

exports.dumpVehicle = async () => {
  try {
    console.log("Dump Vehicle Data");
    let isExist = await vehincleServices.dumpVehicle();
  } catch (error) {
    console.log("BotJoinCron -> ", error);
  }
};
