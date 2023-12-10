import loader from "../../assets/logo fix alter.png"
import styles from "./Loader.module.css"

export default function Loader() {
    return (
        <div className={styles.Back}>
            <div className={styles.Logo}><img src={loader} alt="" /></div>
        </div>
    )
};
