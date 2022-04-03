const { vehicleRoutes } = require("../apis/vehicle_detail");

const initialize = (app) => {
  app.use("/vehicle", vehicleRoutes);

  app.use("/authError", (req, res, next) => {
    return next(new Error("DEFAULT_AUTH"));
  });

  app.get("/ping", (req, res) => {
    res.status(200).send({
      success: true,
      statusCode: 200,
    });
  });
};

module.exports = { initialize };
