import React from 'react';
import { NavLink } from "react-router-dom";
import { LoginUrl } from '../../../../Routes/Routes';
import './SideDrawer.css';

//боковая выдвижная панель
const SideDrawer = (props) => {

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                {props.items.map(item =>
                     <li>
                        <a href={item.href}>{item.value}</a>
                     </li>
                )}
                <NavLink to={LoginUrl} className= 'buttonMain' onClick={props.click}>Вход</NavLink>
            </ul>
        </nav>
    );
}

export default SideDrawer;