import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList.js';

const productList = [{ id: 1, name: 'Product Name 1', category: 'Product Category 1', description: 'A short description', price: 150 },
{ id: 2, name: 'Product Name 2', category: 'Product Category 2', description: 'A short description', price: 54.2 },
{ id: 3, name: 'Product Name 3', category: 'Product Category 3', description: 'A short description', price: 75 }];



ReactDOM.render(
    <ProductList products={productList} />,
    document.getElementById('root')
);
