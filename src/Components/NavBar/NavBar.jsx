import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logonavbar.png";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <a className={styles.ref} href="/"><img className={styles.Logo} src={Logo} alt="" /></a>
      <div className={styles.refContainer}>
        <a className={styles.ref} href="/aboutme">About me</a>
        <a className={styles.ref} href="/skills">Skills</a>
        <a className={styles.ref} href="/proyects">Projects</a>
        <a className={styles.ref} href="/contact">Contact</a>
      </div>
    </div>
  );
};
