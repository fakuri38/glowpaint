import React, { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {SignInModal} from '../SignInModal/SignInModal';

export const Header = () => {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  // const [isModalOpen, setModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setModalOpen(!isModalOpen);
  // };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>GLOWPAINTRUN</h1>
        <nav className={styles.navigation}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/event-page" className={styles.navLink}>Event</Link>
        </nav>
      </div>
      <div className={styles.authContainer}>
        {/* Open SignInModal on Sign In button click */}
        <button className={styles.signInButton} onClick={openModal}>
          Sign In
        </button>
        {/* <Link to='/home-signed-in-page'>
          <button className={styles.signInButton}>Sign In</button>
        </Link> */}
        <Link to='/admin-sign-in-page'>
          <button className={styles.adminButton}>Admin</button>
        </Link>
      </div>
      <SignInModal open={isModalOpen} onClose={closeModal}/>
      {/* Render the SignInModal when isModalOpen is true */}
      {/* {isModalOpen && (
        <SignInModal
          isOpen={isModalOpen}
          onClose={toggleModal} // Close modal when onClose is triggered
          onNext={() => {
            console.log("Sign In button clicked in modal");
            setModalOpen(false); // Close modal after Sign In action
          }}
        />
      )} */}

    </header>
  );
};
