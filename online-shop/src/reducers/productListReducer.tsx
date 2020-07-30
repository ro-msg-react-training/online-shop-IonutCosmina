import {GET_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST} from '../actions/actions'
import { ProductEntity } from '../components/ProductDetailsPage'
import { combineReducers } from 'redux'
 
export interface IProductsState {
    products: ProductEntity[];
    loading: boolean;
    error: string;
}


const defaultState : IProductsState ={
    loading: false,
    products:[],
    error: ''
 }
 const mainReducer=(state=defaultState, action)=>{
   switch (action.type){
    case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          
        }
       case GET_PRODUCTS:
       return{
        ... state,
        products: action.payload
       }
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload
      }
       default: return state
     }
   
   }
    
const rootReducer = combineReducers({
    products: mainReducer
}) 
 export default rootReducer
 //export const getProducts = state => state.products;
 