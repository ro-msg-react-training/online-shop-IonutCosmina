import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Button from '@material-ui/core/Button';
import Div from '@material-ui/core/Divider';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router} from 'react-router-dom'
import ProductAPI from '../api'
import ProductDetails from './ProductDetails';

const ProductDetailsPage=(props)=>{
    const product=ProductAPI.get(parseInt(props.match.params.number,4))
    if (!product){
      return (<p></p>)
    }
    return(
        <div>
        <ProductDetails id={product.id}
                        name={product.name}
                        category = {product.category}
                        description = {product.description}
                        price = {product.price}
                 
        ></ProductDetails>
        </div>
    )
    
}
export default ProductDetailsPage