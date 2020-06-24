import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={ props.open } clicked={ props.closed }/>
            <div className={ attachedClasses.join(' ') } onClick={ props.closed }>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;