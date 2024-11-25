import React from 'react';
import styles from './SignInPage.module.css';
// import Navbar from './Navbar';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <div className={styles.signInPage}>

      <main className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/867339dcf60d071ecb596ea360889c09bb3ca460dd3e3623e7de7ab0a2f90089?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            alt="Glow Paint Run event illustration"
            className={styles.eventImage}
          />
        </div>
        <SignInForm />
      </main>
    </div>
  );
}

export default SignInPage;