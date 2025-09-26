const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

router.get("/", async (req, res) => {
  try {
    const { vehicleTypeId } = req.query;

    let vehicles;

    if (vehicleTypeId) {
      vehicles = await Vehicle.findAll({
        where: { vehicleTypeId: Number(vehicleTypeId) }
      });
    } else {
      vehicles = await Vehicle.findAll(); // fallback: return all
    }

    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});


module.exports = router;
