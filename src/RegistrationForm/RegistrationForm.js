import React, { useState } from "react";
import { Box, Button, Modal, Step, StepLabel, Stepper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./RegistrationForm.module.css";
import { PublicRegistration } from "./ParticipantInformation/PublicRegistration";
import { StudentRegistration } from "./ParticipantInformation/StudentRegistration";
import { PackageSelection } from "./PackageSelection/PackageSelection";
import { TransactionModal } from "./TransactionModal/TransactionModal";
import { SuccessfulRegistration } from "./SuccessfulRegistrationModal/SuccessfulRegistration";

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

const steps = [
  "Participant Information",
  "Package Selection",
  "Payment",
  "Confirmation",
];

export const RegistrationForm = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [registrationType, setRegistrationType] = useState("USM Student");

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
            {registrationType === "USM Student" ? (
              <StudentRegistration />
            ) : (
              <PublicRegistration />
            )}
          </Box>
        );
      case 1: //Package Selection
        return (
          <Box>
            <PackageSelection />
          </Box>
        );
      case 2: // Payment
        return (
          <Box>
            {" "}
            <TransactionModal />{" "}
          </Box>
        );
      case 3: // Success Screen
        return (
          <Box>
            {" "}
            <SuccessfulRegistration />{" "}
          </Box>
        );
      default:
        return <p>Unknown step</p>;
    }
  };

  console.log("onClose prop in RegistrationForm:", onClose);

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        // onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",

          alignItems: "start",
          overflow: "scroll",
        }}
      >
        <Box className={styles.modalContent}>
          <button
            className={styles.closeButton}
            aria-label="Close registration form"
            onClick={onClose}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/f9c1e4fb612255943eac4158feb6ec4bd22fb1491781e95cc8a7cef092677e64?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
              className={styles.closeIcon}
              alt=""
            />
          </button>
          <h2 className={styles.modalTitle}>{steps[activeStep]}</h2>

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
                      color:
                        activeStep === steps.indexOf(label)
                          ? "#6d588b"
                          : "#6d588b70",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Toggle Registration Type only for participation account*/}
          {activeStep === 0 ? (
            <Box className={styles.toggleButtons}>
              <Button
                variant={
                  registrationType === "USM Student" ? "outlined" : "text"
                }
                onClick={() => handleRegistrationTypeChange("USM Student")}
                sx={{
                  fontFamily: "Poppins",
                  borderColor: "#6d588b",
                  color:
                    registrationType === "USM Student" ? "#6d588b" : "#9a9a9a",
                }}
              >
                USM Student
              </Button>
              <Button
                variant={registrationType === "Public" ? "outlined" : "text"}
                onClick={() => handleRegistrationTypeChange("Public")}
                sx={{
                  fontFamily: "Poppins",
                  color: registrationType === "Public" ? "#6d588b" : "#9a9a9a",
                  borderColor: "#6d588b",
                }}
              >
                Public
              </Button>
            </Box>
          ) : null}
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
                fontFamily: "Poppins",
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
                sx={{
                  fontFamily: "Poppins",
                  color: "#ffff",
                }}
              >
                Done
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                sx={{
                  fontFamily: "Poppins",
                  color: "#ffff",
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
