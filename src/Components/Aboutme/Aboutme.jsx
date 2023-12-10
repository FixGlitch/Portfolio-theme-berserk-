import styles from "../Aboutme/Aboutme.module.css"
import Ref from "../../assets/Aboutback.png"
import sword from "../../assets/sword.png"

export default function Aboutme() {
    return (
        <div className={styles.aboutContainer}>
            {/* <img className={styles.sword} src={sword}  alt="sword" /> */}
            <img className={styles.imgAbout} src={Ref} alt="Ref" />
        </div>
    )
};
