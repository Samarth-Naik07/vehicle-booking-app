const sequelize = require("../config/db");
const VehicleType = require("../models/VehicleType");
const Vehicle = require("../models/Vehicle");
const Booking = require("../models/Booking"); // add Booking model

async function seed() {
  await sequelize.sync({ force: true }); 

  // 1️⃣ Vehicle Types
  const hatchback = await VehicleType.create({ name: "Hatchback", wheels: 4 });
  const suv = await VehicleType.create({ name: "SUV", wheels: 4 });
  const sedan = await VehicleType.create({ name: "Sedan", wheels: 4 });
  const cruiser_bike = await VehicleType.create({ name: "Cruiser", wheels: 2 });
  const sport_bike = await VehicleType.create({ name: "Sport", wheels: 2 });

  // 2️⃣ Vehicles
  const hondaCity = await Vehicle.create({ name: "Honda City", vehicleTypeId: hatchback.id });
  const toyotaFortuner = await Vehicle.create({ name: "Toyota Fortuner", vehicleTypeId: suv.id });
  const marutiSwift = await Vehicle.create({ name: "Maruti Swift", vehicleTypeId: hatchback.id });
  const kawasakiNinja = await Vehicle.create({ name: "Kawasaki Ninja", vehicleTypeId: sport_bike.id });
  const royalEnfield = await Vehicle.create({ name: "Royal Enfield", vehicleTypeId: cruiser_bike.id });

  // 3️⃣ Sample Bookings
  await Booking.create({
    firstName: "John",
    lastName: "Doe",
    vehicleId: hondaCity.id,
    startDate: "2025-10-01",
    endDate: "2025-10-03"
  });

  await Booking.create({
    firstName: "Alice",
    lastName: "Smith",
    vehicleId: kawasakiNinja.id,
    startDate: "2025-10-05",
    endDate: "2025-10-07"
  });

  console.log("Database seeded successfully with sample bookings!");
  process.exit();
}

seed();
