import React from 'react'
import {Link} from 'react-router-dom'
import { MenuItem } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    appBar: {
       maxHeigth: "5px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    li: {
        float: "left",
      },
  }));
function NavigationMenu (){
    const classes = useStyles();
    return(
    <AppBar position='fixed' className={classes.appBar}>
        <Toolbar >
        <nav>
            <ul>
                <li  className={classes.li}><Link to='/'><MenuItem>Home</MenuItem></Link></li>
                <li  className={classes.li}><Link to='/product'><MenuItem>Products</MenuItem></Link></li>
            </ul>
        </nav>
        </Toolbar>
    </AppBar>
   

    )}
export default NavigationMenu