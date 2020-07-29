import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductLink from './ProductLink';
import ShoppingCart from './ShoppingCart'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /products
// and /cart routes will match any pathname that starts
// with /products or /cart. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route path='/product' component={ProductLink} />
            <Route path='/shoppingCart' component={ShoppingCart} />
        </Switch>
    </main>
)

export default Main
