const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");

const vehicleTypeRoutes = require("./routes/vehicleTypes.js");
const vehicleRoutes = require("./routes/vehicles.js");
const bookingRoutes = require("./routes/bookings.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/vehicle-types", vehicleTypeRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }) // safe: creates missing tables or updates structure
  .then(() => {
    console.log("✅ All tables are synced and Booking table is ready!");
  })
  .catch((err) => console.error("❌ Table sync failed:", err));

sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Database connection failed:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
