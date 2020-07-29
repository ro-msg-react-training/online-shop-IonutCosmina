import React, { useState } from 'react';
import '../index.css';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router} from 'react-router-dom'
import {useStyles} from '../styles/ProductHeaderStyle'

interface ProductType{
    id: number,
    name: string,
    category: string,

}

const ProductHeader = (props: ProductType) => {
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

export default ProductHeader ;
