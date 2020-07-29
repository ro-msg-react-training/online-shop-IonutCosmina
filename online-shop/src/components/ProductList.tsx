import '../index.css';
import ProductHeader from './ProductHeader'
import React, { useState, useEffect } from 'react';

interface ProductType{
    id: number,
    name: string,
    category: string,
    price: number,
    description: string;
}

interface ProductListType{
   products: ProductType[];
}

const ProductList = (props: ProductListType) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = 'http://localhost:4000/products'


    const getItems = async() => await fetch(url).then(res => res.json());
    useEffect(()=> {
      const fetchData= async() => {
        setIsLoading(true);
        
        getItems().then(data => setItems(data));

  
       // setData(result.data);
        setIsLoading(false);
  
      };
      fetchData();
    }, [url]);
    
  
    //const products = ProductAPI.all();

    const products = items
    const listItems = products.map((product) => <li key = {product.id} className="listItem">
        <ProductHeader id={product.id}
                       name={product.name}
                       category ={product.category}
                        
                 
        ></ProductHeader>
        
        </li>
    );

    return (
          <div>
            <ol className="myList">{listItems}</ol>
          </div>
         
    );

}

export default ProductList
