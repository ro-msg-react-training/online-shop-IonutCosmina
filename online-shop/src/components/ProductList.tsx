import '../css/ListCSS.css';
import ProductHeader from './ProductHeader'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'
import {loadProducts} from '../actions/actions'
import { render } from '@testing-library/react';
import IProductState, { IProductsState } from '../reducers/productListReducer'
import { ProductEntity } from './ProductDetailsPage';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useStyles } from '../styles/ProductListStyle'

interface ProductType {
    id: number,
    name: string,
    category: string,
    price: number,
    description: string;
}

interface ProductListType {
    products: ProductType[];
}
export interface IProps {
  
 // prodData: ProductEntity;
  loadProducts(): any
}
function ProductList <IProps> ({prodData,loadProducts}){
  const classes = useStyles();
   /* const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = 'http://localhost:4000/products'

    const getItems = async () => await fetch(url).then(res => res.json());
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            getItems().then(data => setItems(data));


            // setData(result.data);
            setIsLoading(false);

        };
        fetchData();
    }, [url]);*/

    useEffect (() => {
     loadProducts()

    },[])
   
    /*const products = prodData.products
    console.log(products)
    const listItems = products.map((product) => <li key={product.id} className="listItem">
        <ProductHeader id={product.id}
            name={product.name}
            category={product.category}


        ></ProductHeader>

    </li>
    );*/

    return (
      <div>
        <h2> {console.log(prodData)}</h2>
        <div>
            <Link to={`/product/add`} className={classes.link} >
                <Button variant="contained" color="primary" className={classes.button}>ADD</Button>
            </Link>
          {prodData &&
            prodData.products &&
            prodData.products.map(prod =><ProductHeader key= {prod.id}
              id={prod.id}
              name={prod.name}
              category={prod.category}
  
  
          ></ProductHeader>)}
        </div>
      </div>
    )

}

const mapStateToProps = (state : IProductsState) => {
  return{
    prodData: state.products
  }
    
};

const mapDispatchToProps = dispatch => {
  return{
    loadProducts:()=> dispatch(loadProducts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
//export default ProductList
