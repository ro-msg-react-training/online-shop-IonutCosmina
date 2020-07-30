import '../css/ProductDetailCSS.css';
import ProductDetails from './ProductDetails';
import React, { Fragment, useState, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import ProductEntity from './ProductDetails'
import { getProductDetails } from '../actions/ProductDetailAction';
import { AppState } from '../store';
import { Dispatch } from 'redux';
import {productDetailsLoading } from '../actions/ProductDetailAction';
import { connect } from 'react-redux';
import ProductDetailsPageDumb from "./ProductDetailPageDumb"
import { Container, CircularProgress } from '@material-ui/core';
import { isElementOfType } from 'react-dom/test-utils';

interface productId {
    id: string;

}

export interface ProductEntity {
    id: number,
    name: string,
    category: string,
    price: number,
    description: string;

}
interface Props {
    productDetail: ProductEntity,
    isLoading: boolean,
    productDetailsLoading : (loadingStatus: boolean) => void,
    getProductDetails : (productDetail: ProductEntity) => void,
    matching: RouteComponentProps<any>,
    
}
interface OwnProps{
    matching: RouteComponentProps<any>;
}

const ProductDetailsPage: React.FC <Props> = (props: Props) =>{
    
   
   
   
    
    useEffect (()=>{
        fetch(`http://localhost:4000/products/${props.matching.match.params.id}`)
        .then(response => response.json())
        .then(data =>{
            getProductDetails(data);
            productDetailsLoading(false);
        });


    }, [])

    console.log(props)
    if (props.isLoading) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }
    return (
            <ProductDetailsPageDumb product={props.productDetail}></ProductDetailsPageDumb>
    )

}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
        productDetail : state.productDetails.product,
        isLoading : state.productDetails.isLoading,
        matching: ownProps.matching,
})

const mapDispatchToProps = (dispatch : Dispatch) =>({
    getProductDetails:(productDetail : ProductEntity) => dispatch(getProductDetails(productDetail)),
    productDetailsLoading:(loadingStatus: boolean) => dispatch(productDetailsLoading(loadingStatus))
   
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetailsPage);
//export default ProductDetailsPage
