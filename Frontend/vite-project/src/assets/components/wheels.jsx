import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel, Button, Box } from "@mui/material";

const Step2Wheels = ({ formData, handleChange, nextStep, prevStep }) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!formData.wheels) {
      setError(true); // show error if not selected
      return;
    }
    nextStep();
  };

  return (
    <Box>
      <h3>Number of Wheels</h3>
      <RadioGroup
        value={formData.wheels || " "}
        onChange={(e) => {
          handleChange("wheels", Number(e.target.value));
          setError(false); // clear error when user selects
        }}
      >
        <FormControlLabel value={2} control={<Radio />} label="2 Wheels" />
        <FormControlLabel value={4} control={<Radio />} label="4 Wheels" />
      </RadioGroup>
      {error && <p style={{ color: "red" }}>Please select wheels</p>}
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button onClick={prevStep}>Back</Button>
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default Step2Wheels;
