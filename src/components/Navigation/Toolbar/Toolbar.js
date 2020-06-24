import React from 'react';

import Filters from '../../Filters/Filters';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (<header className={ classes.Toolbar }>
            <DrawerToggle clicked={ props.drawerToggleClicked }/>
            <nav className={ classes.DesktopOnly }>
                <NavigationItems/>
            </nav>
            <Filters show={ props.show }/>
        </header>
    );
};

export default toolbar;