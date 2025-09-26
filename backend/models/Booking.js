const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Vehicle = require("./Vehicle");

const Booking = sequelize.define("Booking", {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  startDate: { type: DataTypes.DATEONLY, allowNull: false }, // only YYYY-MM-DD
  endDate: { type: DataTypes.DATEONLY, allowNull: false },
  vehicleId: { type: DataTypes.INTEGER, allowNull: false } // explicit foreign key
}, {
  tableName: "Bookings" // optional, can control name
});

// Associations
Booking.belongsTo(Vehicle, { foreignKey: "vehicleId" });
Vehicle.hasMany(Booking, { foreignKey: "vehicleId" });

module.exports = Booking;
