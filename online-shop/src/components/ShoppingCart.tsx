import {ProductEntity, CartItems}from './ProductDetailsPage'
import React, { Fragment, useState, useEffect } from 'react';
import { TableContainer, TableHead, Table,TableRow, TableBody, Button, makeStyles, TableCell } from '@material-ui/core'
import {useStyles} from '../styles/ShoppingCartStyle'

let cartItems : CartItems[]= []

export const addToCart = (product: ProductEntity, quantity: number) => {
        
        cartItems.push({product, 'quantity':quantity }); 
        console.log(cartItems)
}

export const getAll = () => {
    return cartItems;
}

 
    
const ShoppingCart =  () => {
    const [isError, setIsError] = useState(false);
    const classes=useStyles()
    const productDetail = cartItems.map((product) =>
    <TableRow key = {product.product.id}>
        <TableCell>{product.product.name}</TableCell>
        <TableCell>{product.product.category}</TableCell>
        <TableCell>{product.product.price}</TableCell>
        <TableCell>{product.quantity}</TableCell>
    </TableRow>
    );
    function createOreder(){
        
        const url = `http://localhost:4000/orders`;
        const createnewOrder= async()=> {
            setIsError(false);
    
            try{
                const products= cartItems.map(prod=>{return {"productId":prod.product.id, "quantity":prod.quantity}})
                const order={
                    "customer":"doej",
                    "products": products
                }
                console.log(order)
                const or =async() => await fetch(url, {method: 'POST',
                                 body: JSON.stringify(order)}).then(res=> res.json())     
                //axios.post(url, order) 
                alert("created new oreder")
            }
            catch(error){
                alert(error)
            }
        };
        createnewOrder()
        
    }
  
    //shopping cart table
    return (
        <TableContainer>
            <Button variant="contained" color="primary" className={classes.checkoutButton} onClick={createOreder}>Ceckout</Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productDetail}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ShoppingCart