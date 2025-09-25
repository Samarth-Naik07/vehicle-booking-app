const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const VehicleType = require("./VehicleType");

const Vehicle = sequelize.define("Vehicle", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Vehicle.belongsTo(VehicleType, { foreignKey: "vehicleTypeId" });
VehicleType.hasMany(Vehicle, { foreignKey: "vehicleTypeId" });

module.exports = Vehicle;
