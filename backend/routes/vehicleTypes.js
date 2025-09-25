const express = require("express");
const router = express.Router();
const VehicleType = require("../models/VehicleType");

router.get("/", async (req, res) => {
  const wheels = req.query.wheels;
  const types = await VehicleType.findAll({ where: { wheels } });
  res.json(types);
});

module.exports = router;
