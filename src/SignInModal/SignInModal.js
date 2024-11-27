import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Modal, Button } from "@mui/material";
import { TextField } from "../components/TextField";
import { PasswordField } from "../components/PasswordField";
import styles from "./SignInModal.module.css";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const SignInModal = ({ open, onClose }) => {
  const location = useLocation();
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openRegistrationModal = () => {
    onClose(); 
    setRegistrationModalOpen(true); 
  };

  const closeRegistrationModal = () => {
    setRegistrationModalOpen(false); // Close RegistrationForm modal
  };

  return (
    <>
      {/* Sign In Modal */}
      <Modal
        open={open}
        onClose={onClose} // Handles clicking outside or pressing Escape
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
              alt="Close Icon"
            />
          </button>
          <header>
            <h1 className={styles.welcomeText}>Welcome to GlowPaintRun</h1>
            <h2 className={styles.modalTitle}>Sign In</h2>
          </header>

          <main>
            <form className={styles.formContent}>
              <TextField
                label="Email Address"
                placeholder="Email address"
                type="email"
                id="email"
              />
              <PasswordField
                label="Password"
                placeholder="Enter password"
                id="password"
              />
            </form>

            <footer className={styles.modalFooter}>
              <Link to="/home-signed-in-page">
                <button type="submit" className={styles.nextButton}>
                  Sign In
                </button>
              </Link>

              <section className={styles.signUpSection}>
                <p className={styles.orText}>or</p>
                <p className={styles.signUpText}>
                  Don't have an account?{" "}
                  <Button variant="text" onClick={openRegistrationModal}>
                    <div className={styles.signUpLink}>Sign Up</div>
                  </Button>
                </p>
              </section>
            </footer>
          </main>
        </Box>
      </Modal>

      <RegistrationForm 
        open={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
      />
    </>
  );
};
