import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer, { IProductsState } from './reducers/productListReducer'
import { combineReducers } from 'redux'
import {ProductDetailsReducer,ProductDetailsState} from './reducers/ProductDetailReducer'

const rootReducer = combineReducers({
    products: mainReducer,
    productDetails: ProductDetailsReducer,

}) 
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export interface AppState{
    products: IProductsState;
    productDetails: ProductDetailsState;
}
export default store


