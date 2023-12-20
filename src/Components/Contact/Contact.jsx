import logo from "../../assets/logo fix alter.png"
import styles from "../Contact/Contact.module.css"

export default function Contact({ onClick }) {
    const handleClick = (component) => {
        onClick(component);
        const element = document.getElementById(component);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    return (
        <div id="contact" className={styles.containerFooter}>
            <p className={styles.get}>get in touch 🠮🠮🠮🠮</p>
           <a href="https://calendly.com/blancolucas112/30min?month=2023-12"><img className={styles.logo} src={logo} alt="logo" /></a>
            <a  href="#" onClick={() => handleClick('home')}  className={styles.ref}>⮅</a>
        </div>
    )
};
