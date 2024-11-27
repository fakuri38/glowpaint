import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Card,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./RegistrationForm.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6d588b", 
    },
    secondary: {
      main: "#ffffff", 
    },
  },
});

const packages = [
  {
    id: "basic",
    name: "Basic Package",
    description: "Suitable for beginners and individuals.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "pro",
    name: "Pro Package",
    description: "Ideal for professionals and teams.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    description: "Perfect for large organizations.",
    image: "https://via.placeholder.com/150",
  },
];




const steps = ["Account Info", "Package Details", "Confirmation"];

export const RegistrationForm = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [registrationType, setRegistrationType] = useState("Public");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setActiveStep(0);
    onClose();
  };

  const handleRegistrationTypeChange = (type) => {
    setRegistrationType(type);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    usmStudentId: "",
    faculty: "",
    phoneNumber: "",
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0: // Account Info
        return (
          <Box>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              placeholder="Full name as per IC/Passport"
              margin="normal"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              placeholder="8 - 12 characters"
              margin="normal"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Retype your password"
              margin="normal"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {registrationType === "USM Student" ? (
              <>
                <TextField
                  fullWidth
                  label="USM Student ID"
                  name="usmStudentId"
                  placeholder="Enter your student ID"
                  margin="normal"
                  value={formData.usmStudentId}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  label="Faculty"
                  name="faculty"
                  placeholder="Enter your faculty"
                  margin="normal"
                  value={formData.faculty}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                placeholder="Enter your phone number"
                margin="normal"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            )}
          </Box>
        );
      case 1: //package selection
        return (
          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              sx={{
                width: 250,
                border: selectedPackage === pkg.id ? "2px solid #6d588b" : "1px solid #ccc",
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": { borderColor: "#6d588b" },
              }}
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                style={{ width: "100%", height: 150, objectFit: "cover" }}
              />
              <Box padding={2}>
                <h3 style={{ margin: 0, color: selectedPackage === pkg.id ? "#6d588b" : "#000" }}>
                  {pkg.name}
                </h3>
                <p style={{ fontSize: "0.9em", color: "#555" }}>{pkg.description}</p>
              </Box>
            </Card>
          ))}
        </Box>
        );
      case 2: // Confirmation
        return <p>Review your details and submit to complete registration.</p>;
      default:
        return <p>Unknown step</p>;
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Registration</h2>

          {/* Stepper */}
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              "& .MuiStepIcon-root": {
                color: "#d3c3e0", 
              },
              "& .MuiStepIcon-text": {
                fill: "#ffffff", 
              },
              "& .MuiStepIcon-active": {
                color: "#6d588b", 
              },
              "& .MuiStepIcon-completed": {
                color: "#6d588b", 
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      color: activeStep === steps.indexOf(label) ? "#6d588b" : "#6d588b80", 
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Toggle Registration Type */}
          <Box className={styles.toggleButtons}>
            <Button
              variant={registrationType === "USM Student" ? "contained" : "outlined"}
              onClick={() => handleRegistrationTypeChange("USM Student")}
              sx={{
                color: registrationType === "USM Student" ? "#ffffff" : "#6d588b",
                backgroundColor: registrationType === "USM Student" ? "#6d588b" : "transparent",
                borderColor: "#6d588b",
                "&:hover": {
                  backgroundColor: registrationType === "USM Student" ? "#5a4676" : "#e0e0e0",
                },
              }}
            >
              USM Student
            </Button>
            <Button
              variant={registrationType === "Public" ? "contained" : "outlined"}
              onClick={() => handleRegistrationTypeChange("Public")}
              sx={{
                color: registrationType === "Public" ? "#ffffff" : "#6d588b",
                backgroundColor: registrationType === "Public" ? "#6d588b" : "transparent",
                borderColor: "#6d588b",
                "&:hover": {
                  backgroundColor: registrationType === "Public" ? "#5a4676" : "#e0e0e0",
                },
              }}
            >
              Public
            </Button>
          </Box>

          {/* Step Content */}
          <Box className={styles.stepContent}>
            {renderStepContent(activeStep)}
          </Box>

          {/* Stepper Actions */}
          <Box className={styles.modalActions}>
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                color: "#6d588b",
                borderColor: "#6d588b",
                "&:hover": {
                  backgroundColor: "#f3eafc",
                },
              }}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                Finish
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
