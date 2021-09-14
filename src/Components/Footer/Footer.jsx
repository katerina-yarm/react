import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    
    return(
        <footer className={styles.footer}>
            <p className={styles.text}>Контактный телефон: <a className={styles.link} href="#">+375220000000</a> </p>
            <p className={styles.text}>Электронная почта <a className={styles.link} href = "#" target="_blank"> feedback@exsample.com</a></p>
        </footer>
    );
}
export default Footer;