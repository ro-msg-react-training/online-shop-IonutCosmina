import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Home from './Home'
import ProductLink from './ProductLink';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /products
// and /cart routes will match any pathname that starts
// with /products or /cart. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route path='/product' component={ProductLink}/>
        </Switch>
    </main>
)

export default Main