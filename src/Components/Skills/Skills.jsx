import styles from "../Skills/Skills.module.css"
import sback from "../../assets/Skillsback.png"
import mountain from "../../assets/mountain.png"
import moon from "../../assets/moontiny.png"

export default function Skills() {
    return(
        <div id="skills">
            <img className={styles.moon} src={moon} alt="moon" />
            <img className={styles.mountain} src={mountain} alt="mountain" />
            <img className={styles.imgback} src={sback} alt="sback" />
        </div>
    )
};
