import React from 'react';
//import ReactDOM from 'react-dom';
import '../index.css';
import Button from '@material-ui/core/Button';
import ProductDetails from './ProductDetails';
import Product from './ProductLink'
import { Link, BrowserRouter as Router} from 'react-router-dom'
import ProductAPI from '../api';
import ProductName from './ProductName'
interface ProductType{
    id: number,
    name: string,
    category: string,
    price: number,
    description: string;

}

interface ProductListType{
   products: ProductType[];
}
function ProductList(props: ProductListType) {

    const products = ProductAPI.all();
    const listItems = products.map((product) => <li key = {product.id} className="listItem">
        <ProductName id={product.id}
                        name={product.name}
                        category ={product.category}
                        
                 
        ></ProductName>
        
        </li>
    );

    return (
        <ol className="myList">{listItems}</ol>
    );

}
export default ProductList
