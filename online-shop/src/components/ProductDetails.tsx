import React, { useState } from 'react';
import '../css/ProductDetailCSS.css';
import Button from '@material-ui/core/Button';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { addToCart } from './ShoppingCart'
import { useStyles } from '../styles/ProductDetailsStyle'
import TypographyDisplay from './TypograpyDisplay'



interface ProductEntity {
    id: number,
    name: string,
    category: string,
    price: number,
    description: string;

}

const ProductDetails = (props: ProductEntity) => {


    const url = `http://localhost:4000/products/${props.id}`;
    const classes = useStyles();
    const cartItems = []
    const [isError, setIsError] = useState(false);

    // quantity with hook
    const [quantity, setQuantity] = useState(0);
    const handleClick = () => setQuantity(quantity + 1);
    const handleClick2 = () => quantity > 0 && setQuantity(quantity - 1);

    function addToShoppingCart() {
        if (quantity > 0) {
            addToCart(props, quantity)
            alert("Added to Shopping Cart")
        }
        else {
            alert("Quantity is 0")
        }
    }



    //const deleteItem =async() => await fetch(url,{method: 'DELETE'}).then(res => res.json());  
    function deleteProduct() {
        const deleteProductbyId = async () => {
            setIsError(false);

            try {
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.text())

                alert("deleted")
            }
            catch (error) {
                alert(error)
            }
        };
        deleteProductbyId();
    }

    return (  //TODO Typography and div a component
        <div className="productComponent">
            <div className="productDetails">
                <TypographyDisplay className='productName' productdetail={props.name}></TypographyDisplay>
                <div className="productCategory">{props.category}</div>
                <TypographyDisplay className='productPrice' productdetail={" $" + props.price}></TypographyDisplay>
                <div id="quantity">Quantity:{quantity}
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick2}>-</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>+</Button>
                </div>
                <div className="buttonWrapper">
                    <Button variant="contained" color="primary" className="cartButton" onClick={addToShoppingCart}>Add to ShoppingCart</Button>
                </div>
            </div>
            <div className="productDescription">{props.description}</div>
            <Link to={`/product`} className={classes.link} >
                <Button variant="contained" color="primary" className={classes.button}>Back</Button>
            </Link>
            <Button variant="contained" color="primary" className={classes.button} onClick={deleteProduct}>Delete</Button>

        </div>);



}

export default ProductDetails;
