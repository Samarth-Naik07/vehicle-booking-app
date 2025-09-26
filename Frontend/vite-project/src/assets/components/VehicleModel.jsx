import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel, Button, Box } from "@mui/material";

const Step4VehicleModel = ({ formData, handleChange, vehicles, nextStep, prevStep }) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!formData.vehicleId) {
      setError(true);
      return;
    }
    nextStep();
  };

  return (
    <Box>
      <RadioGroup
        value={formData.vehicleId}
        onChange={(e) => handleChange("vehicleId", Number(e.target.value))}
      >
        {vehicles.map((v) => (
          <FormControlLabel key={v.id} value={v.id} control={<Radio />} label={v.name} />
        ))}
      </RadioGroup>
      {error && <p style={{ color: "red" }}>Please select a vehicle</p>}
      <Button onClick={prevStep}>Back</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </Box>
  );
};

export default Step4VehicleModel;
