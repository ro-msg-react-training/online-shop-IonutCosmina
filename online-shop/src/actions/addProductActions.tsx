import AddProduct, { ProductAdd } from "../components/AddProduct";
import { ProductEntity } from "../components/ProductDetailsPage";
import { ProcessEnvOptions } from "child_process";

export enum AddProductActionTypes{
    ADD_PRODUCT='ADD_PRODUCT',
    ADD_PRODUCT_LOADING='ADD_PRODUCT_LOADING',
    ADD_PRODUCT_ERROR='ADD_PRODUCT_ERROR'
}

export class AddProductLoadingStatusAction{
    public readonly type = AddProductActionTypes.ADD_PRODUCT_LOADING;
    public loadingStatus: boolean;


    constructor(loadingStatus: boolean){
        this.loadingStatus = loadingStatus;
    }
}

export class AddNewProductAction{
    public readonly type = AddProductActionTypes.ADD_PRODUCT;
    public newproduct: ProductAdd

    constructor(newproduct: ProductAdd){
        this.newproduct = newproduct;
    }
}

export class AddProductErrorAction{
    public readonly type = AddProductActionTypes.ADD_PRODUCT_ERROR
    public errorStatus: string;


    constructor(errorStatus: string){
        this.errorStatus = errorStatus;
    }
}

export type AddProductAction = AddProductLoadingStatusAction | AddNewProductAction | AddProductErrorAction

export const addProductLoading = (loadingStatus: boolean): AddProductLoadingStatusAction =>{
    return ({
        type: AddProductActionTypes.ADD_PRODUCT_LOADING,
        loadingStatus: loadingStatus,
    })
}

export const addProduct = (newproduct: ProductAdd): AddNewProductAction =>{
    return ({
        type: AddProductActionTypes.ADD_PRODUCT,
        newproduct : newproduct,

    })
}

export const addProductError = (errorStatus: string): AddProductErrorAction =>{
    return ({
        type: AddProductActionTypes.ADD_PRODUCT_ERROR,
        errorStatus: errorStatus,
    })
}