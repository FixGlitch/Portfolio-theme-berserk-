import React from "react";
import proyect1 from "../../assets/Proyect1.png";
import proyect2 from "../../assets/Proyect2.png";
import proyect3 from "../../assets/Proyect3.png";
import styles from "../Proyects/Proyects.module.css";

export default function Proyects() {
  const handleMouseOver = (event) => {
    const target = event.target;
    target.style.zIndex = "1";
  };

  const handleMouseOut = (event) => {
    const target = event.target;
    target.style.zIndex = "0";
  };

  return (
    <div id="proyects" className={styles.projectsContainer}>
      <img
        className={`${styles.proyect} ${styles.proyect1}`}
        src={proyect1}
        alt="Rick and Morty"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        className={`${styles.proyect} ${styles.proyect2}`}
        src={proyect2}
        alt="Countriesapp"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        className={`${styles.proyect} ${styles.proyect3}`}
        src={proyect3}
        alt="GenshySupplements"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
