import '../css/ProductDetailCSS.css';
import ProductDetails from './ProductDetails';
import React, { Fragment, useState, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import ProductEntity from './ProductDetails'

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
export interface CartItems {
    product: ProductEntity,
    quantity: number;

}
const ProductDetailsPage = (props: RouteComponentProps<productId>) => {
    const product = {} as ProductEntity
    const [items, setItems] = useState(product);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const param = props.match.params
    const url = `http://localhost:4000/products/${param.id}`;


    // console.log(url)
    const getItem = async () => await fetch(url).then(res => res.json());

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                getItem().then(data => setItems(data));
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);


    //const product=ProductAPI.get(parseInt(props.match.params.number,4))

    const prod =

        <ProductDetails id={items.id}
            name={items.name}
            category={items.category}
            description={items.description}
            price={items.price}

        ></ProductDetails>



    return (
        <div>
            {prod}
        </div>
    )

}
export default ProductDetailsPage
