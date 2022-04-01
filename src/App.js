

import React from 'react';
import productsList from './data/products.json'
import Filter from './components/Filter/Filter.js';
import Products from './components/Products/Products.js';
import styled from 'styled-components';
import * as PropTypes from "prop-types";
import Cart from './components/Cart/Cart.js' ;
import products from "./components/Products/Products.js";

let productsObj = {
    products: productsList
}

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`

// const Cart = styled.div`
//   border: 1px solid black;
//   padding: 8px;
// `

Products.propTypes = {
    products: PropTypes.func, nameValue: PropTypes.string, minValue: PropTypes.string, maxValue: PropTypes.string
};

class App extends React.Component {

    state = {
        minValue: "",
        maxValue: "",
        nameValue: "",
        productsInCart: [
            {
                "id": 1,
                "name": "Explorer 1",
                "price": 100.00,
                "photo": "https://img.ibxk.com.br/2020/10/09/09001326865481.jpg?ims=704x",
                quantity: 1
            },
            {
                "id": 2,
                "name": "Sputnik",
                "price": 125.00,
                "photo": "https://img.ibxk.com.br/2020/10/09/09001157614480.jpg?ims=704x",
                quantity:2
            }

        ]

    }

    onChangeMinValue = (event) => this.setState({minValue: event.target.value});
    onChangeMaxValue = (event) => this.setState({maxValue: event.target.value});
    onChangeNameValue = (event) => this.setState({nameValue: event.target.value});

    onAddProductCart = (productId) => {
        const productInCart = this.state.productsInCart.find(product => productId === product.id)

        if (productInCart) {
            const newProductInCart = this.state.productInCart.map(product =>{
                if(productId === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }

                return product
            })
            this.setState({productInCart: newProductInCart})
        }else{
            const productToAdd = products.find(product => productId === product.id)

            const newProductsInCart = [...this.state.productInCart, {...productToAdd, quantity : 1}]

            this.setState({productsInCart : newProductsInCart})


        }


    }

    onRemoveProductsFromCart = (productId) => {
        const newProductsInCart = this.state.productsInCart.map((product) =>{
            if(product.id === productId) {
                return {
                    ...product,
                    quantity : product.quantity - 1
                }
            }
            return product
        }).filter((product) => product.quantity > 0 )
        this.setState({productsInCart: newProductsInCart})
    }


    render() {
        return (
            <ContainerMain>

                <Filter
                    minValue={this.state.minValue}
                    maxValue={this.state.maxValue}
                    nameValue={this.state.nameValue}
                    onChangeMinValue={this.onChangeMinValue}
                    onChangeMaxValue={this.onChangeMaxValue}
                    onChangeNameValue={this.onChangeNameValue}

                />

                <Products
                    products={productsObj.products}
                    minValue={this.state.minValue}
                    maxValue={this.state.maxValue}
                    nameValue={this.state.nameValue}
                    onAddProductCart= {this.onAddProductCart}

                />

                <Cart
                    product = {productsObj.products}
                    productsInCart = {this.state.productsInCart}
                    onRemoveProductsFromCart={this.onRemoveProductsFromCart}

                />

            </ContainerMain>
        );
    }
}

export default App;

