import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logonavbar.png";

export default function NavBar({ onNavClick }) {
  const handleClick = (component) => {
    onNavClick(component);
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.navbar}>
      <a className={styles.ref} href="#" onClick={() => handleClick('home')}>
        <img className={styles.Logo} src={Logo} alt="Logo" />
      </a>
      <div className={styles.refContainer}>
        <a className={styles.ref} href="#aboutme" onClick={() => handleClick('aboutme')}>About me</a>
        <a className={styles.ref} href="#skills" onClick={() => handleClick('skills')}>Skills</a>
        <a className={styles.ref} href="#proyects" onClick={() => handleClick('proyects')}>Projects</a>
        <a className={styles.ref} href="#contact" onClick={() => handleClick('contact')}>Contact</a>
      </div>
    </div>
  );
};
