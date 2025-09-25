const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

router.get("/", async (req, res) => {
  const typeId = req.query.typeId;
  const vehicles = await Vehicle.findAll({ where: { vehicleTypeId: typeId } });
  res.json(vehicles);
});

module.exports = router;
