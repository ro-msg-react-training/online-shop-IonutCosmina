import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Button from '@material-ui/core/Button';
import Div from '@material-ui/core/Divider';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router} from 'react-router-dom'



const useStyles = makeStyles(theme =>({
    button: {
        margin: "0 0 0 5px",
        float: "right",
        verticalAlign: "middle",
      },
  
    }));


interface ProductType{
    id: number,
    name: string,
    category: string,

}

function ProductName(props: ProductType) {
    const classes = useStyles();
        return (
            <div className="productComponent">
                <Typography color= "primary">
                    <div className="productName">{props.name}</div>
                </Typography>
                <div className="productCategory">{props.category}</div>
           
            <Link to={`/product/${props.id}`}><Button variant="contained" color="primary"className={classes.button}>Details</Button></Link>
            

        </div>);

    
   
}

export default ProductName ;
