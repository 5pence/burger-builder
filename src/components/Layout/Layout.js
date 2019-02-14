import React from 'react';
import Auxill from '../../hoc/Auxill';
import classes from './Layout.css';

const layout = (props) => (
    <Auxill>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxill>
);

export default layout;