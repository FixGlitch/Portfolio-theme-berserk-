import Luna from "../../assets/redmoon.png"
import Git from "../../assets/github.svg"
import Ig from "../../assets/instagram.svg"
import In from "../../assets/linkedin.svg"
import styles from "./Home.module.css"
import Aboutme from "../Aboutme/Aboutme"

export default function Home() {
    return (
        <div className={styles.ContainerHome}>
            <img className={styles.Luna} src={Luna} alt="Luna" />
            <div>
                <h1 className={styles.lucasBlanco}>Lucas Blanco</h1>
                <h2 className={styles.frontendDeveloper}>Frontend developer</h2>
                <a href="https://www.instagram.com/fixglitchdev/"><img className={styles.socialIcon} src={Ig}/></a>
                <a href="https://github.com/FixGlitch"><img className={styles.socialIcon} src={Git}/></a>
                <a href="https://www.linkedin.com/in/lucasdblanco/"><img className={styles.socialIcon} src={In}/></a>
            </div>
            <Aboutme/>
        </div>
    )
};
