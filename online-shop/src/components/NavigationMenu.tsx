import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import '../css/ListCSS.css';
import { useStyles } from '../styles/NavigationMenusStyle'


const NavigationMenu = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar >
                <nav>
                    <ul>
                        <li className={classes.li}><Link to='/'><MenuItem>Home</MenuItem></Link></li>
                        <li className={classes.li}><Link to='/product'><MenuItem>Products</MenuItem></Link></li>
                        <li className={classes.li}><Link to='/shoppingCart'><MenuItem>Cart</MenuItem></Link></li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>


    )
}
export default NavigationMenu
