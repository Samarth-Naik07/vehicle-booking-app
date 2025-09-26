import React from "react";
import MultiStepForm from "./assets/components/MultiStepForm";
import { Container, Typography, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Vehicle Booking Form
        </Typography>
        <MultiStepForm />
      </Box>
    </Container>
  );
}

export default App;
