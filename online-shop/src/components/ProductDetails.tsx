import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Button from '@material-ui/core/Button';
import Div from '@material-ui/core/Divider';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router} from 'react-router-dom'



const useStyles = makeStyles(theme =>({
    button: {
        margin: "5px 5px",
        
      },
      cartButton:{
          alignContent:'left',
      },
      link:{
        textDecoration: "none",
      }
  
    }));
    


interface ProductEntity{
    id: number,
    name: string,
    category: string,
    price: number,
    description: string;

}

function ProductDetails(props: ProductEntity) {
    const classes = useStyles();
    const cartItems =[]
    //hooks
    const[quantity, setQuantity]=useState(0);
    const handleClick = () => setQuantity(quantity + 1)
    const handleClick2 = () => {if (quantity>0){setQuantity(quantity-1)}} 
    const addToShoppingCart=()=> { if (quantity>0) {cartItems.push(props); 
                                    alert("Added to Shopping Cart")}
                                    else {alert("Quantity is 0")}}
    
        return (
            <div className="productComponent">
                <div className="productDetails">
                <Typography color= "primary">
                    <div className="productName">{props.name}</div>
                </Typography>
                <div className="productCategory">{props.category}</div>
                <Typography color= "primary">
                    <div className="productPrice"> ${props.price}</div>
                </Typography>
            
                <div id="quantity">Quantity:{quantity}
                    <Button variant="contained" color="primary" className={classes.button}  onClick={handleClick}>+</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick2}>-</Button>
                </div>
                <div className="buttonWrapper">
                <Button variant="contained" color="primary" className="cartButton" onClick={addToShoppingCart}>Add to ShoppingCart</Button>
                </div>
           
            </div>
            <div className="productDescription">{props.description}</div>
            <Link to={`/product`} className={classes.link} ><Button variant="contained" color="primary"className={classes.button}>Back</Button></Link>
            

        </div>);

    
   
}

export default ProductDetails ;
