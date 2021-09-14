import React from 'react';
import styles from './DrawerToggleButton.module.css';

//кнопка переключения (бургер)
const DrawerToggleButton = (props) => {
    return (
    <button className={styles.toggleButton} onClick={props.click} >
        <div className={styles.toggleButtonLine}/>
        <div className={styles.toggleButtonLine}/>
        <div className={styles.toggleButtonLine}/>
    </button>
    );
}

export default DrawerToggleButton;