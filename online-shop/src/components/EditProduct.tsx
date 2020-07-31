import { useState } from "react";
import {
    Typography,
    Paper,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import React, { Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../styles/AddProductStyle';
import { ProductEntity } from './ProductDetailsPage';
import { Link, BrowserRouter as Router, RouteComponentProps } from 'react-router-dom'
import { AppState } from '../store';
import  {Dispatch}  from 'redux';
import { connect } from 'react-redux';
import { editProduct, editProductLoading } from "../actions/editProductActions";
export interface ProductEdit {
    id: string,
    name: string,
    category:string,
    price:string,
    image: string,
    description: string;
  
  }

interface PropsEdit{
    productEdit: ProductEdit,
    isLoading: boolean,
    editProductLoading:  (loadingStatus: boolean) => void,
    editProduct : (productEdit: ProductEdit) => void,
    matching: RouteComponentProps<any>,

}

interface OwnProps{
  matching: RouteComponentProps<any>;
}

const EditProduct :React.FC<PropsEdit> = (props: PropsEdit) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const classes = useStyles();
   
    
    const editProductRequest = (product: ProductEdit) =>{
      let editedProduct;
      const url=`http://localhost:4000/products/${props.matching.match.params.id}`
      fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => console.log(response))
        .then(prod => editedProduct = prod);
          props.editProduct(editedProduct);
          props.editProductLoading(false);
    
     
     }

    const saveChangeProduct = () => {
        //console.log(props.productEdit)
            const produ ={
              id: id,
              name: name,
              category: category,
              price: price,
              image: image,
              description: description,
              
            }
            editProductRequest(produ)
      }

    return (
        <div className={classes.box}>
            <form>
              <TextField className={classes.firstfield}
                id="textFieldId"
                label="Id"
                type= "number"
                value= {id}
                onChange={e => setId(e.target.value)}
              
              />
              <TextField  className={classes.textfield}
                id="textFieldName"
                label="Name"
                value= {name}
                onChange={e => setName(e.target.value)}
             
               
              
              />
              <TextField className={classes.textfield}
                id="textFieldCategory"
                label="Category"
                value= {category}
                onChange={e => setCategory(e.target.value)}
              
              />
              <TextField className={classes.textfield}
                id="textFieldPrice"
                label="Price"
                value= {price}
                onChange={e => setPrice(e.target.value)}
                
               
               
              />
              <TextField className={classes.textfield}
                id="textFieldImage"
                label="Image"
                value= {image}
                onChange={e => setImage(e.target.value)}
                
                
               
              />
              <TextField className={classes.textfield}
                id="textFieldDescription"
                label="Description"
                multiline
                rows='3'
                rowsMax={10}
                value= {description}
                onChange={e => setDescription(e.target.value)}
              
              
              />
              
              </form>
              
              <Button variant="contained" color="primary" type="submit" className={classes.button} onClick={saveChangeProduct}>Save</Button>

            <Link to={`/product`} className={classes.link} >
                <Button variant="contained" color="primary" className={classes.button}>Close</Button>
            </Link>
            
        </div>
    )

}

  
const mapStateToProps = (state: AppState, ownProps: OwnProps) =>({
    editproduct : state.editproduct.editProduct,
    isLoading : state.editproduct.isLoading,
    matching: ownProps.matching,
  })
  
const mapDispatchToProps = (dispatch : Dispatch) =>({
    editProductLoading:  (loadingStatus: boolean) => dispatch(editProductLoading(loadingStatus)),
    editProduct : (productEdit: ProductEdit) => dispatch(editProduct(productEdit))
  
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EditProduct);