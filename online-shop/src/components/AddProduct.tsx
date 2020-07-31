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
import React, { Fragment, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../styles/AddProductStyle';
import { ProductEntity } from './ProductDetailsPage';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { AppState } from '../store';
import  {Dispatch}  from 'redux';
import { connect } from 'react-redux';
import { addProductLoading, addProduct } from '../actions/addProductActions';

interface FormProps{
  name: string,
  category : string,
  price : number,
  description : string,
  image: string,
  fields :{}
}

export interface ProductAdd {
  id: string,
  name: string,
  category:string,
  price:string,
  image: string,
  description: string;

}

interface PropsAdd{
  product: ProductAdd,
  isLoading: boolean,
  addProductLoading:  (loadingStatus: boolean) => void,
  addProduct : (product: ProductAdd) => void,

}
const AddProduct : React.FC<PropsAdd> = (props: PropsAdd) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

    const classes = useStyles();
    const addnewProductRequest = (product: ProductAdd) =>{
      fetch(`http://localhost:4000/products/`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data =>{
          props.addProduct(data);
          props.addProductLoading(false);
      });


   
    }
   /* const onSub =() => {
      console.log(props.product)
      const produ ={
        category: props.product.category,
        name: props.product.name,
        price: props.product.price,
        image: props.product.image,
        description: props.product.description,
        id: props.product.id
      }
      addnewProductRequest(produ)
    }*/
    const savenewProduct = () => {
      console.log(props.product)
          const produ ={
            category: category,
            name: name,
            price: price,
            image: image,
            description: description,
            id: id,
          }
          addnewProductRequest(produ)
    }
    /*const validation = () =>{
     
      let errors = {};
      let formIsValid = true;

      if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Required"
     }
     return formIsValid;
    }
    function submitForm(){
      return props.name;
    }*/
    //const { name, category, price } = props;



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
              
              <Button variant="contained" color="primary" type="submit" className={classes.button} onClick={savenewProduct}>Save</Button>

            <Link to={`/product`} className={classes.link} >
                <Button variant="contained" color="primary" className={classes.button}>Close</Button>
            </Link>
            
        </div>
    )
}

const mapStateToProps = (state: AppState) =>({
  newproduct : state.addproduct.newProduct,
  isLoading : state.addproduct.isLoading,
})


const mapDispatchToProps = (dispatch : Dispatch) =>({
  addProductLoading:  (loadingStatus: boolean) => dispatch(addProductLoading(loadingStatus)),
  addProduct : (product: ProductAdd) => dispatch(addProduct(product))

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct);


//export default AddProduct

