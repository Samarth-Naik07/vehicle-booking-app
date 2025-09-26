import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";

const Step5DateRange = ({ formData, handleChange, handleSubmit, prevStep }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    const today = new Date().toISOString().split("T")[0]; // format YYYY-MM-DD

    if (!formData.startDate || !formData.endDate) {
      setError("Please select both dates");
      return;
    }

    if (formData.startDate < today) {
      setError("Start date cannot be in the past");
      return;
    }

    if (formData.endDate < formData.startDate) {
      setError("End date cannot be before start date");
      return;
    }

    setError(""); // clear error
    handleSubmit();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box>
      <TextField
        type="date"
        label="Start Date"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: today }} // disable past dates
        value={formData.startDate || ""}
        onChange={(e) => handleChange("startDate", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        type="date"
        label="End Date"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: formData.startDate || today }} // end date >= start date
        value={formData.endDate || ""}
        onChange={(e) => handleChange("endDate", e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button onClick={prevStep}>Back</Button>
        <Button variant="contained" onClick={handleNext}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Step5DateRange;
