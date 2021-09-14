import React from 'react';
import styles from './Backdrop.module.css';

//фон
const Backdrop = (props) => {
    return (
    <div className={styles.backdrop} onClick={props.click} ></div>
    );
}
 export default Backdrop;