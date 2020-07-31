import { ProductEdit } from "../components/EditProduct";

export enum EditProductActionTypes{
    EDIT_PRODUCT='EDIT_PRODUCT',
    EDIT_PRODUCT_LOADING='EDIT_PRODUCT_LOADING',
    EDIT_PRODUCT_ERROR='EDIT_PRODUCT_ERROR'
}

export class EditProductLoadingStatusAction{
    public readonly type = EditProductActionTypes.EDIT_PRODUCT_LOADING;
    public loadingStatus: boolean;


    constructor(loadingStatus: boolean){
        this.loadingStatus = loadingStatus;
    }
}

export class EditNewProductAction{
    public readonly type = EditProductActionTypes.EDIT_PRODUCT;
    public editproduct: ProductEdit

    constructor(editproduct: ProductEdit){
        this.editproduct = editproduct;
    }
}

export class EditProductErrorAction{
    public readonly type = EditProductActionTypes.EDIT_PRODUCT_ERROR
    public errorStatus: string;


    constructor(errorStatus: string){
        this.errorStatus = errorStatus;
    }
}

export type EditProductAction = EditProductLoadingStatusAction | EditNewProductAction | EditProductErrorAction

export const editProductLoading = (loadingStatus: boolean): EditProductLoadingStatusAction =>{
    return ({
        type: EditProductActionTypes.EDIT_PRODUCT_LOADING,
        loadingStatus: loadingStatus,
    })
}

export const editProduct = (editproduct: ProductEdit): EditNewProductAction =>{
    return ({
        type: EditProductActionTypes.EDIT_PRODUCT,
        editproduct : editproduct,

    })
}

export const editProductError = (errorStatus: string): EditProductErrorAction =>{
    return ({
        type: EditProductActionTypes.EDIT_PRODUCT_ERROR,
        errorStatus: errorStatus,
    })
}