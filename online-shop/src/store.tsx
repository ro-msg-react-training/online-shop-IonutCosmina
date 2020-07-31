import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer, { IProductsState } from './reducers/productListReducer'
import { combineReducers } from 'redux'
import {ProductDetailsReducer,ProductDetailsState} from './reducers/ProductDetailReducer'
import { AddNewProductState, AddProductReducer } from './reducers/AddProductReducer'
import { EditProductState, EditProductReducer } from './reducers/editProductreducer'

const rootReducer = combineReducers({
    products: mainReducer,
    productDetails: ProductDetailsReducer,
    addproduct: AddProductReducer,
    editproduct: EditProductReducer

}) 
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export interface AppState{
    products: IProductsState;
    productDetails: ProductDetailsState;
    addproduct: AddNewProductState;
    editproduct: EditProductState
}
export default store


