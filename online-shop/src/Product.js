import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Product(props) {
   
    return (<div className="ProductComponent">
        <div className="ProductDetails">
            <div className="ProductName">{props.name}</div>
            <div className="ProductCategory">{props.category}</div>
            <div className="ProductPrice"> ${props.price}</div>
        </div>
        <div className="ProductDescription"> Description {props.description}</div>

    </div>);



}

export default Product ;