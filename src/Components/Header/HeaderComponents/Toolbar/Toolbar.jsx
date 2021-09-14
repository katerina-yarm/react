import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import styles from './Toolbar.module.css';
import { NavLink } from "react-router-dom";
import { LoginUrl } from '../../../../Routes/Routes';


const Toolbar = (props) => {
    
    return (
        <header className={styles.toolbar}>
            <nav className={styles.navigation}>
                <div className={styles.toggleButton}>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className={styles.logo}>HOMEBAKERY</div>
                <div className={styles.spacer}></div>
                <div className={styles.items}>
                    <ul>
                        {props.items.map(item =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                        <NavLink to={LoginUrl} className={styles.buttonMain}>Вход</NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;