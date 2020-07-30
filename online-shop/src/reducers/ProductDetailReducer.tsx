import ProductDetailsPage, { ProductEntity } from "../components/ProductDetailsPage";
import { ProductDetailAction, ProdDetailActionTypes } from "../actions/ProductDetailAction";

export interface ProductDetailsState {
    isLoading: boolean,
    product: ProductEntity,
    error: string;
}
const initialState: ProductDetailsState = {
    isLoading: true,
    product: { id: 0, name: '', category: '', price: 0, description: '' },
    error: "",

}

export const ProductDetailsReducer = (
    state: ProductDetailsState = initialState,
    action: ProductDetailAction,
): ProductDetailsState => {
    console.log(action)
    switch (action.type) {
        case ProdDetailActionTypes.PRODUCT_DETAIL_LOADING: {
            return {
                ...state,
                isLoading: action.loadingStatus,
            }
        }
        case ProdDetailActionTypes.PRODUCT_DETAIL_FETCH: {
            return {
                ...state,
                product: action.productDetails
            }
        }
        case ProdDetailActionTypes.PRODUCT_DETAIL_ERROR: {
            return {
                ...state,
                error: action.errorStatus
            }
        }
        default:
            return state;
    }
}