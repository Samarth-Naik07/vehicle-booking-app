const sequelize = require("../config/db");
const VehicleType = require("../models/VehicleType");
const Vehicle = require("../models/Vehicle");

async function seed() {
  try {
    await sequelize.sync({ alter: true }); 

    
    const [hatchback] = await VehicleType.findOrCreate({ where: { name: "Hatchback" }, defaults: { wheels: 4 } });
    const [suv] = await VehicleType.findOrCreate({ where: { name: "SUV" }, defaults: { wheels: 4 } });
    const [sedan] = await VehicleType.findOrCreate({ where: { name: "Sedan" }, defaults: { wheels: 4 } });
    const [coupe] = await VehicleType.findOrCreate({ where: { name: "Coupe" }, defaults: { wheels: 4 } });
    const [pickup] = await VehicleType.findOrCreate({ where: { name: "Pickup" }, defaults: { wheels: 4 } });

    const [cruiserBike] = await VehicleType.findOrCreate({ where: { name: "Cruiser Bike" }, defaults: { wheels: 2 } });
    const [sportBike] = await VehicleType.findOrCreate({ where: { name: "Sport Bike" }, defaults: { wheels: 2 } });
    const [scooter] = await VehicleType.findOrCreate({ where: { name: "Scooter" }, defaults: { wheels: 2 } });
    const [dirtBike] = await VehicleType.findOrCreate({ where: { name: "Dirt Bike" }, defaults: { wheels: 2 } });

    
    await Vehicle.findOrCreate({ where: { name: "Maruti Swift" }, defaults: { vehicleTypeId: hatchback.id } });
    await Vehicle.findOrCreate({ where: { name: "Hyundai i20" }, defaults: { vehicleTypeId: hatchback.id } });
    await Vehicle.findOrCreate({ where: { name: "Tata Altroz" }, defaults: { vehicleTypeId: hatchback.id } });

    // 🚙 SUVs
    await Vehicle.findOrCreate({ where: { name: "Toyota Fortuner" }, defaults: { vehicleTypeId: suv.id } });
    await Vehicle.findOrCreate({ where: { name: "Hyundai Creta" }, defaults: { vehicleTypeId: suv.id } });
    await Vehicle.findOrCreate({ where: { name: "Mahindra XUV700" }, defaults: { vehicleTypeId: suv.id } });

    // 🚘 Sedans
    await Vehicle.findOrCreate({ where: { name: "Honda City" }, defaults: { vehicleTypeId: sedan.id } });
    await Vehicle.findOrCreate({ where: { name: "Hyundai Verna" }, defaults: { vehicleTypeId: sedan.id } });
    await Vehicle.findOrCreate({ where: { name: "Skoda Slavia" }, defaults: { vehicleTypeId: sedan.id } });

    // 🏎️ Coupes
    await Vehicle.findOrCreate({ where: { name: "Ford Mustang" }, defaults: { vehicleTypeId: coupe.id } });
    await Vehicle.findOrCreate({ where: { name: "Audi TT" }, defaults: { vehicleTypeId: coupe.id } });
    await Vehicle.findOrCreate({ where: { name: "BMW M4" }, defaults: { vehicleTypeId: coupe.id } });

    // 🚚 Pickups
    await Vehicle.findOrCreate({ where: { name: "Isuzu D-Max" }, defaults: { vehicleTypeId: pickup.id } });
    await Vehicle.findOrCreate({ where: { name: "Toyota Hilux" }, defaults: { vehicleTypeId: pickup.id } });
    await Vehicle.findOrCreate({ where: { name: "Ford Ranger" }, defaults: { vehicleTypeId: pickup.id } });

    // 🏍️ Cruiser Bikes
    await Vehicle.findOrCreate({ where: { name: "Royal Enfield Classic 350" }, defaults: { vehicleTypeId: cruiserBike.id } });
    await Vehicle.findOrCreate({ where: { name: "Harley Davidson Street 750" }, defaults: { vehicleTypeId: cruiserBike.id } });
    await Vehicle.findOrCreate({ where: { name: "Bajaj Avenger" }, defaults: { vehicleTypeId: cruiserBike.id } });

    // 🏍️ Sport Bikes
    await Vehicle.findOrCreate({ where: { name: "Kawasaki Ninja" }, defaults: { vehicleTypeId: sportBike.id } });
    await Vehicle.findOrCreate({ where: { name: "Yamaha R15" }, defaults: { vehicleTypeId: sportBike.id } });
    await Vehicle.findOrCreate({ where: { name: "KTM Duke 390" }, defaults: { vehicleTypeId: sportBike.id } });

    // 🛵 Scooters
    await Vehicle.findOrCreate({ where: { name: "Honda Activa" }, defaults: { vehicleTypeId: scooter.id } });
    await Vehicle.findOrCreate({ where: { name: "TVS Jupiter" }, defaults: { vehicleTypeId: scooter.id } });
    await Vehicle.findOrCreate({ where: { name: "Suzuki Access 125" }, defaults: { vehicleTypeId: scooter.id } });

    // 🏍️ Dirt Bikes
    await Vehicle.findOrCreate({ where: { name: "Yamaha FZ" }, defaults: { vehicleTypeId: dirtBike.id } });
    await Vehicle.findOrCreate({ where: { name: "Hero XPulse 200" }, defaults: { vehicleTypeId: dirtBike.id } });
    await Vehicle.findOrCreate({ where: { name: "KTM Adventure 390" }, defaults: { vehicleTypeId: dirtBike.id } });

    console.log("✅ Vehicles seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seed();
