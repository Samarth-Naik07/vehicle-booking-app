const express = require("express");
const router = express.Router();
const VehicleType = require("../models/VehicleType.js");

router.get("/", async (req, res) => {
  try {
    const { wheels } = req.query;

    if (!wheels) {
      return ;
    }

    const vehicleTypes = await VehicleType.findAll({
      where: { wheels: Number(wheels) }, // ensure number
    });

    res.json(vehicleTypes);
  } catch (err) {
    console.error("Error fetching vehicle types:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
