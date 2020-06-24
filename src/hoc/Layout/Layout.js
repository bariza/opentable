import React, { useState } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { useSelector } from 'react-redux';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const isCityLoaded = useSelector((state) => state.cities.isCityLoaded);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <div className={ classes.Container }>
                <Toolbar
                    show={ isCityLoaded }
                    drawerToggleClicked={ sideDrawerToggleHandler }/>
                <SideDrawer
                    open={ showSideDrawer }
                    closed={ sideDrawerClosedHandler }/>
                <main className={ classes.Content }>
                    { props.children }
                </main>
            </div>
        </React.Fragment>
    );
};

export default Layout;