import { ProductEntity } from "../components/ProductDetailsPage";

export enum ProdDetailActionTypes{
    PRODUCT_DETAIL_FETCH= 'PRODUCT_DETAIL_FETCH',
    PRODUCT_DETAIL_LOADING = 'PRODUCT_DETAIL_LOADING',
    PRODUCT_DETAIL_ERROR= 'PRODUCT_DETAIL_ERROR'

}


export class ProductDetailsLoadingStatusAction{
    public readonly type = ProdDetailActionTypes.PRODUCT_DETAIL_LOADING;
    public loadingStatus: boolean;


    constructor(loadingStatus: boolean){
        this.loadingStatus = loadingStatus;
    }
}

export class GetProductDetails{
    public readonly type = ProdDetailActionTypes.PRODUCT_DETAIL_FETCH;
    public productDetails: ProductEntity

    constructor(productDetails: ProductEntity){
        this.productDetails = productDetails;
    }
}

export class ProductDetailsErrorAction{
    public readonly type = ProdDetailActionTypes.PRODUCT_DETAIL_ERROR;
    public errorStatus: string;


    constructor(errorStatus: string){
        this.errorStatus = errorStatus;
    }
}

export type ProductDetailAction = ProductDetailsLoadingStatusAction | GetProductDetails | ProductDetailsErrorAction;

export const productDetailsLoading = (loadingStatus: boolean): ProductDetailsLoadingStatusAction =>{
    return ({
        type: ProdDetailActionTypes.PRODUCT_DETAIL_LOADING,
        loadingStatus: loadingStatus,
    })
}

export const getProductDetails = (productDetails: ProductEntity): GetProductDetails =>{
    return ({
        type: ProdDetailActionTypes.PRODUCT_DETAIL_FETCH,
        productDetails : productDetails,

    })
}

export const productDetailsError = (errorStatus: string): ProductDetailsErrorAction =>{
    return ({
        type: ProdDetailActionTypes.PRODUCT_DETAIL_ERROR,
        errorStatus: errorStatus,
    })
}