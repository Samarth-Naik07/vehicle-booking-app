import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DateRange = ({ formData, handleChange, handleSubmit, prevStep }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = async () => {
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

    setError(""); // clear previous errors

    try {
      await handleSubmit(); // submit booking
      navigate("/"); // redirect to main page after success
    } catch (err) {
      setError(err.message || "Booking failed. Please try again.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box>
      <TextField
        type="date"
        label="Start Date"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: today }} // prevent past dates
        value={formData.startDate || ""}
        onChange={(e) => handleChange("startDate", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        type="date"
        label="End Date"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: formData.startDate || today }} // end date cannot be before start date
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

export default DateRange;
