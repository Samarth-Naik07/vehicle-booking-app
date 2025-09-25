const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");

const vehicleTypeRoutes = require("./routes/vehicleTypes");
const vehicleRoutes = require("./routes/vehicles");
const bookingRoutes = require("./routes/bookings");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/vehicle-types", vehicleTypeRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Database connection failed:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
