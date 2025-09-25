const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  // Validate input
  if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check overlapping bookings
  const overlappingBooking = await Booking.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        { startDate: { [Op.between]: [startDate, endDate] } },
        { endDate: { [Op.between]: [startDate, endDate] } },
        { startDate: { [Op.lte]: startDate }, endDate: { [Op.gte]: endDate } }
      ]
    }
  });

  if (overlappingBooking) return res.status(400).json({ error: "Vehicle already booked" });

  const booking = await Booking.create({ firstName, lastName, vehicleId, startDate, endDate });
  res.json({ message: "Booking successful", booking });
});

module.exports = router;
