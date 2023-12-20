import styles from "../Skills/Skills.module.css"
import sback from "../../assets/Skillsback.png"
import mountain from "../../assets/mountain.png"
import moon from "../../assets/moontiny.png"

export default function Skills() {
    return (
        <div id="skills">
            <div className={styles.skillsContainer}>
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3 logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5 logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="docker logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git logo" />
            </div>
            <div className={styles.skillsContainer2}>
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" alt="less logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql logo" />
                <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap logo" />
                <img className={styles.icons} src="https://reactnative.dev/docs/assets/favicon.png" alt="React Native logo" />
            </div>
            <div className={styles.skillsExp}>
                <p className={styles.text}>Experienced</p>
                <p className={styles.text}>Experienced</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Experienced</p>
                <p className={styles.text}>Basic</p>
                <p className={styles.text}>Basic</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Intermediate</p>
            </div>
            <div className={styles.skillsExp2}>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Basic</p>
                <p className={styles.text}>Basic</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>Intermediate</p>
                <p className={styles.text}>In comming</p>
            </div>
            <p className={styles.mystack}>My Stack</p>
            <img className={styles.moon} src={moon} alt="moon" />
            <img className={styles.mountain} src={mountain} alt="mountain" />
            <img className={styles.imgback} src={sback} alt="sback" />
        </div>
    )
};
