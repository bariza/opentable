import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={ classes.NavigationItems }>
        <NavigationItem link="/" exact>Search for City</NavigationItem>
    </ul>
);

export default navigationItems;