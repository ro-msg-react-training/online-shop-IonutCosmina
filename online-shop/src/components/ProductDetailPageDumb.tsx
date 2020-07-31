import { ProductEntity } from "./ProductDetailsPage";
import ProductDetails from './ProductDetails'
import React from "react";
interface Props {
    product : ProductEntity,
}

const ProductDetailsDumb: React.FC<Props> = (props: Props) => {


    return (
        <ProductDetails id={props.product.id}
            name={props.product.name}
            category={props.product.category}
            description={props.product.description}
            price={props.product.price}

    ></ProductDetails>
    );
}

export default ProductDetailsDumb