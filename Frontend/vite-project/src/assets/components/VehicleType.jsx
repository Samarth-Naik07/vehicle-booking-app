import React, { useEffect, useState } from "react";
import { Radio, RadioGroup, FormControlLabel, Button, Box } from "@mui/material";
import api from "../api/api.jsx"; // axios instance

const VehicleTypes = ({ formData, handleChange, nextStep, prevStep }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!formData.wheels) return; // only fetch when wheels is selected

    api.get(`/vehicle-types?wheels=${formData.wheels}`)
      .then((res) => setVehicleTypes(res.data))
      .catch((err) => console.error("Error fetching vehicle types:", err));
  }, [formData.wheels]); // refetch when wheels changes

  const handleNext = () => {
    if (!formData.vehicleTypeId) {
      setError(true);
      return;
    }
    nextStep();
  };

  return (
    <Box>
      <RadioGroup
        value={formData.vehicleTypeId}
        onChange={(e) => {
          handleChange("vehicleTypeId", Number(e.target.value));
          setError(false);
        }}
      >
        {vehicleTypes.map((vt) => (
          <FormControlLabel
            key={vt.id}
            value={vt.id}
            control={<Radio />}
            label={vt.name}
          />
        ))}
      </RadioGroup>
      {error && <p style={{ color: "red" }}>Please select a vehicle type</p>}
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button onClick={prevStep}>Back</Button>
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default VehicleTypes;
