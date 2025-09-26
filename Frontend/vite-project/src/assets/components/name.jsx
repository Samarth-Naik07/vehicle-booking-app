import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Step1Name = ({ formData, handleChange, nextStep }) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName) {
      setError(true);
      return;
    }
    nextStep();
  };

  return (
    <Box>
      <TextField
        label="First Name"
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <p style={{ color: "red" }}>Please fill both names</p>}
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </Box>
  );
};

export default Step1Name;
