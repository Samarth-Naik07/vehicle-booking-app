const sequelize = require("../config/db");
const VehicleType = require("../models/VehicleType");
const Vehicle = require("../models/Vehicle");

async function seed() {
  await sequelize.sync({ force: true }); // recreate tables

  const hatchback = await VehicleType.create({ name: "Hatchback", wheels: 4 });
  const suv = await VehicleType.create({ name: "SUV", wheels: 4 });
  const sedan = await VehicleType.create({ name: "Sedan", wheels: 4 });
  const cruiser_bike = await VehicleType.create({ name: "Cruiser", wheels: 2 });
  const sport_bike = await VehicleType.create({ name: "Sport", wheels: 2 });

  await Vehicle.create({ name: "Honda City", vehicleTypeId: hatchback.id });
  await Vehicle.create({ name: "Toyota Fortuner", vehicleTypeId: suv.id });
  await Vehicle.create({ name: "Maruti Swift", vehicleTypeId: hatchback.id });
  await Vehicle.create({ name: "Kawasaki Ninja", vehicleTypeId: sport_bike.id });
  await Vehicle.create({ name: "royal enfield", vehicleTypeId: cruiser_bike.id });

  console.log("Database seeded successfully!");
  process.exit();
}

seed();
