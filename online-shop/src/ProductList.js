import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './Product.js';

function ProductList(props) {

    const products = props.products;
    const listItems = products.map((product) => <li key = {props.id} className="ListItem">
        <Product name = {product.name}
            category = {product.category}
            description = {product.description}
            price = {product.price}

        /></li>
    );

    return (
        <ol className="List">{listItems}</ol>
    );

}

export default ProductList