import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Step1Name from "./name.jsx";
import Step2Wheels from "./wheels.jsx";
import Step3VehicleType from "./VehicleType.jsx";
import Step4VehicleModel from "./VehicleModel.jsx";
import Step5DateRange from "./DateRange.jsx";
import api from "../api/api.jsx";

const MultiStepForm = () => {
  const navigate = useNavigate(); 
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleTypeId: "",
    vehicleId: "",
    startDate: null,
    endDate: null,
  });

  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicle types from backend
    api.get("/vehicle-types").then((res) => setVehicleTypes(res.data));
  }, []);

  useEffect(() => {
    if (formData.vehicleTypeId) {
      // Fetch vehicles of selected type
      api.get("/vehicles").then((res) => {
        const filtered = res.data.filter(
          (v) => v.vehicleTypeId === formData.vehicleTypeId
        );
        setVehicles(filtered);
      });
    }
  }, [formData.vehicleTypeId]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/bookings", formData);
      alert(res.data.message);
      navigate("/")
    } catch (err) {
      alert(err.response?.data?.error || "Booking failed");
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1Name formData={formData} handleChange={handleChange} nextStep={nextStep} />
      );
    case 2:
      return (
        <Step2Wheels formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
      );
    case 3:
      return (
        <Step3VehicleType
          formData={formData}
          handleChange={handleChange}
          vehicleTypes={vehicleTypes.filter(vt => vt.wheels === Number(formData.wheels))}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4VehicleModel
          formData={formData}
          handleChange={handleChange}
          vehicles={vehicles}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Step5DateRange
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
