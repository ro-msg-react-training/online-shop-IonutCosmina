import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Product(props) {

    //hooks
   const[quantity, setQuantity]=useState(0);
   const handleClick = () => setQuantity(quantity + 1)
   const handleClick2 = () => {if (quantity>0){setQuantity(quantity-1)}}
   
  


    return (<div className="ProductComponent">
        <div className="ProductDetails">
            <div className="ProductName">{props.name}</div>
            <div className="ProductCategory">{props.category}</div>
            <div className="ProductPrice"> ${props.price}</div>
            
            <div id="quantity">Quantity: {quantity}
                <button className="QuantityButton" onClick={handleClick}>+</button>
                <button className="QuantityButton" onClick={handleClick2}>-</button>
            </div>
        </div>
        <div className="ProductDescription">{props.description}</div>

    </div>);



}

export default Product ;