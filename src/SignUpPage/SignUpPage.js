import React from 'react';
import styles from './SignUpPage.module.css';
// import Navbar from './Navbar';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <main className={styles.signUpPage}>
      
      <section className={styles.contentSection}>
        <div className={styles.imageWrapper}>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/867339dcf60d071ecb596ea360889c09bb3ca460dd3e3623e7de7ab0a2f90089?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" 
            alt="GlowPaintRun event illustration" 
            className={styles.eventImage} 
          />
        </div>
        <SignUpForm />
      </section>
    </main>
  );
}

export default SignUpPage;