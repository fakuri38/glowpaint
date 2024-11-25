import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Step,
  StepLabel,
  Stepper,
  TextField,
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


const steps = ["Account Info", "Package Details", "Confirmation"];

export const RegistrationForm = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [registrationType, setRegistrationType] = useState("Public");

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

  const renderStepContent = (step) => {
    switch (step) {
      case 0: // Account Info
        return (
          <Box>
            <TextField
              fullWidth
              label="Full Name"
              placeholder="Full name as per IC/Passport"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email Address"
              placeholder="Enter your email"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="8 - 12 characters"
              margin="normal"
              type="password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Retype your password"
              margin="normal"
              type="password"
            />
                        {registrationType === "USM Student" ? (
              <>
                <TextField
                  fullWidth
                  label="USM Student ID"
                  placeholder="Enter your student ID"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Faculty"
                  placeholder="Enter your faculty"
                  margin="normal"
                />
              </>
            ) : (
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
                margin="normal"
              />
            )}
          </Box>
        );
      case 1: 
        return (
          <Box>
            <TextField
              fullWidth
              label="Full Name"
              placeholder="Full name as per IC/Passport"
              margin="normal"
            />
            {registrationType === "USM Student" ? (
              <>
                <TextField
                  fullWidth
                  label="USM Student ID"
                  placeholder="Enter your student ID"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Faculty"
                  placeholder="Enter your faculty"
                  margin="normal"
                />
              </>
            ) : (
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
                margin="normal"
              />
            )}
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
