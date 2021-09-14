import React from 'react';
import styles from './Header.module.css';
import Backdrop from './HeaderComponents/Backdrop/Backdrop';
import SideDrawer from './HeaderComponents/SideDrawer/SideDrawer';
import Toolbar from "./HeaderComponents/Toolbar/Toolbar";
import { HomeUrl } from '../../Routes/Routes';

class Header extends React.Component {
  
  state = {
    SideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState (() => {
    return {SideDrawerOpen: false}
    });
  }

  render() {
    let items = [{value: "Главная", href: {HomeUrl}}, {value: "Книги", href: "/books"}, {value: "Рецепты", href: "/recipe"}, {value: "Техники", href: "/techniques"}, {value: "Публикации", href: "/publications"}];
  
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    
    return (
      <div className={styles.header}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} items={items}/>
        <SideDrawer show={this.state.SideDrawerOpen} click={this.backdropClickHandler} items={items}/>
        {backdrop}
      </div>
    );

  }
}

export default Header;

