import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetailsPage from './ProductDetailsPage'
import ProductList from './ProductList'


import { Switch, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails';


const ProductLink = () => (
  <Switch>
    <Route exact path='/product' component={ProductList}/>
    <Route path='/product/:number' component={ProductDetailsPage}/>
  </Switch>
)


export default ProductLink
