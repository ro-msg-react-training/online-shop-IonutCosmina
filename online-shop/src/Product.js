import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/mystyles.css';

function Product(props) {

    //hooks
   const[quantity, setQuantity]=useState(0);
   const handleClick = () => setQuantity(quantity + 1)
   const handleClick2 = () => {if (quantity>0){setQuantity(quantity-1)}}
   
  


    return (<div className="box ProductComponent title">
        <div className="ProductDetails">
            <div className="ProductName has-text-primary">{props.name}</div>
            <div className="ProductCategory">{props.category}</div>
            <div className="has-text-primary"> ${props.price}</div>
            
            <div id="quantity">Quantity:{quantity}
                <button className="QuantityButton button is-primary" onClick={handleClick}>+</button>
                <button className="QuantityButton button is-primary" onClick={handleClick2}>-</button>
            </div>
        </div>
        <div className="ProductDescription">{props.description}</div>

    </div>);



}

export default Product ;