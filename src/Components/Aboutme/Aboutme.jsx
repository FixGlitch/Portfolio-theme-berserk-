import React from "react";
import styles from "../Aboutme/Aboutme.module.css";
import Ref from "../../assets/Aboutback.png";
import sword from "../../assets/sword.png";
import Aboutpic from "../../assets/aboutpic.png";

export default function Aboutme() {
  return (
    <div id="aboutme" className={styles.aboutContainer}>
        <p className={styles.myExperience}>
          Hello everyone! I'm Lucas Blanco, a fullstack developer with a passion
          for creating impactful digital solutions. My experience spans from
          crafting attractive and user-friendly interfaces to building robust
          systems on the back-end. I'm always excited to take on new challenges
          and stay up-to-date with the latest technological trends. My goal is to
          merge creativity with functionality to deliver exceptional projects
          that exceed expectations. I'm delighted to connect and explore the
          endless possibilities of development together!
        </p>
        <img className={styles.aboutPic1Icon} src={Aboutpic} alt="Aboutpic" />
        <img className={styles.sword} src={sword} alt="sword" /> 
      <img className={styles.imgAbout} src={Ref} alt="Ref" />
    </div>
  );
}