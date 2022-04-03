const { vehicleRoutes } = require(".");
const commonResponse = require("../../helpers/commonResponse");
const vehicleServices = require("./vehicle.services");

module.exports = {
  get: async (req, res, next) => {
    try {
      let vehicles = await vehicleServices.get(req.query);
      return commonResponse.success(res, "DEFAULT", 200, vehicles);
    } catch (error) {
      return next(error);
    }
  },

  
  updateTruck: async (req, res, next) => {
    try {
      let vehicles = await vehicleServices.updateTruck(req.query);
      return commonResponse.success(res, "DEFAULT", 200, vehicles);
    } catch (error) {
      return next(error);
    }
  },


  filter: async (req, res, next) => {
    try {
      let vehicles = await vehicleServices.filterByLicensse(req.query);
      return commonResponse.success(res, "DEFAULT", 200, vehicles);
    } catch (error) {
      return next(error);
    }
  },

  filterFromHistory: async (req, res, next) => {
    try {
      let vehicles = await vehicleServices.filterByLicensseFromHistory(req.query);
      if (vehicles) {
        return commonResponse.success(res, "DEFAULT", 200, vehicles);
      }
      return commonResponse.success(res, "DEFAULT", 200, (vehicles = {}));
    } catch (error) {
      return next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      let vehicles = await vehicleServices.getAll(req.query);
      if (vehicles.length > 0) {
        return commonResponse.success(res, "DEFAULT", 200, vehicles);
      } else {
        return commonResponse.success(res, "DEFAULT", 200, []);
      }
    } catch (error) {
      return next(error);
    }
  },

  getFuelConsumption: async (req, res, next) => {
    try {
      let data = await vehicleServices.getFuelConsumptionV2(req.query);
      //console.log("FuelData", data);
      return commonResponse.success(res, "DEFAULT", 200, data);
    } catch (error) {
      return next(error);
    }
  },
};
