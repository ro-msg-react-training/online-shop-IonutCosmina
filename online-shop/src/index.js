import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Product extends React.Component {
    render() {
        return (<div className="ProductComponent">
            <div className="ProductDetails">
                <div className="ProductName">{this.props.name}</div>
                <div className="ProductCategory">{this.props.category}</div>
                <div className="ProductPrice"> ${this.props.price}</div>
            </div>
            <div className="ProductDescription"> Description {this.props.description}</div>

        </div>);

    }
}

function ProductList(props) {

    const products = props.products;
    const listItems = products.map((product) => <li key = {props.id} class="ListItem">
        <Product name = {product.name}
            category = {product.category}
            description = {product.description}
            price = {product.price}

        /></li>
    );

    return (
        <ol class="List">{listItems}</ol>
    );

}

const productList = [{ id: 1, name: 'Product Name 1', category: 'Product Category 1', description: 'A short description', price: 150 },
{ id: 2, name: 'Product Name 2', category: 'Product Category 2', description: 'A short description', price: 54.2 },
{ id: 3, name: 'Product Name 3', category: 'Product Category 3', description: 'A short description', price: 75 }];



ReactDOM.render(
    <ProductList products={productList} />,
    document.getElementById('root')
);


