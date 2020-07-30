import {ProductEntity} from "../components/ProductDetailsPage"

export const GET_PRODUCTS ='GET_PRODUCTS'
export const FETCH_PRODUCTS_REQUEST='FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_FAILURE='FETCH_PRODUCTS_FAILURE'
export interface Message{
    products: ProductEntity[]
}
export function loadProducts(){
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        
        return fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(json => {
            dispatch(getProducts(json));
            return json;
         /* .then(response => {
            const products=response.json
            dispatch(getProducts(products))
            */
        })
        .catch(error =>{
            dispatch(fetchProductsFailure(error.message))
        })
          
      }
    
}

export const fetchProductsRequest = ()=>{
    return{
        type: FETCH_PRODUCTS_REQUEST
    }
}
export const getProducts = (products) =>{
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const fetchProductsFailure = error =>{
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}



