const router = require("express").Router();
const controller = require("./vehicle.controller");

router.get("/", controller.get);
router.get("/all", controller.getAll);
router.get("/filter", controller.filter);
router.get("/update-truck", controller.updateTruck);
router.get("/filterFromHistory", controller.filterFromHistory);
router.get("/get-fuel-consumption", controller.getFuelConsumption);

module.exports = router;
