import { ProductEntity } from "../components/ProductDetailsPage";
import { AddProductAction, AddProductActionTypes } from "../actions/addProductActions";
import { ProductAdd } from "../components/AddProduct";

export interface AddNewProductState{
    isLoading: boolean,
    newProduct: ProductAdd,
    error: string;
}
const initialState:AddNewProductState = {
    isLoading: true,
    newProduct:{ id: '', name: '', category: '', price: '',image: "", description: '' },
    error: "",
}

export const AddProductReducer =(
    state: AddNewProductState=initialState,
    action: AddProductAction,
):AddNewProductState =>{
    console.log(action.type)
    switch (action.type) {
        case AddProductActionTypes.ADD_PRODUCT_LOADING: {
            return {
                ...state,
                isLoading: action.loadingStatus,
            }
        }
        case AddProductActionTypes.ADD_PRODUCT: {
            return {
                ...state,
                newProduct: action.newproduct
            }
        }
        case AddProductActionTypes.ADD_PRODUCT_ERROR: {
            return {
                ...state,
                error: action.errorStatus
            }
        }
        default:
            return state;
    }
}