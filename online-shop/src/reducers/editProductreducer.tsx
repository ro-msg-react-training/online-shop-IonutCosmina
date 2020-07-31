import { EditProductAction, EditProductActionTypes } from "../actions/editProductActions"
import { ProductEdit } from "../components/EditProduct"

export interface EditProductState{
    isLoading: boolean,
    editProduct: ProductEdit,
    error: string;
}
const initialState:EditProductState = {
    isLoading: true,
    editProduct:{ id: '', name: '', category: '', price: '',image: "", description: '' },
    error: "",
}

export const EditProductReducer =(
    state: EditProductState=initialState,
    action: EditProductAction,
):EditProductState =>{
    console.log(action.type)
    switch (action.type) {
        case EditProductActionTypes.EDIT_PRODUCT_LOADING: {
            return {
                ...state,
                isLoading: action.loadingStatus,
            }
        }
        case EditProductActionTypes.EDIT_PRODUCT: {
            return {
                ...state,
                editProduct: action.editproduct
            }
        }
        case EditProductActionTypes.EDIT_PRODUCT_ERROR: {
            return {
                ...state,
                error: action.errorStatus
            }
        }
        default:
            return state;
    }
}