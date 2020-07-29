import React from 'react';
import ProductDetailsPage from './ProductDetailsPage'
import ProductList from './ProductList'
import { Switch, Route } from 'react-router-dom'

const ProductLink = () => (
    <Switch>
        <Route exact path='/product' component={ProductList} />
        <Route path='/product/:id' component={ProductDetailsPage} />
    </Switch>
)


export default ProductLink
