import React from 'react';
import ProductDetailsPage from './ProductDetailsPage'
import ProductList from './ProductList'
import { Switch, Route } from 'react-router-dom'
import AddProduct  from './AddProduct';
import EditProduct from './EditProduct';

const ProductLink = () => (
    <Switch>
        <Route exact path='/product' component={ProductList} />
        <Route path='/product/add' component = { AddProduct } />
        <Route path='/product/edit/:id' render = {renderProps => (
            <EditProduct matching ={renderProps}></EditProduct>
        )} />
        <Route path='/product/:id' render = {renderProps => (
            <ProductDetailsPage matching ={renderProps}></ProductDetailsPage>
        )} />
       
    </Switch>
)


export default ProductLink
