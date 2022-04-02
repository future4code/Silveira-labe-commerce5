import React from 'react';
import productsList from './data/products.json'
import Filter from './components/Filter/Filter.js';
import Products from './components/Products/Products.js';
import styled from 'styled-components';
import Cart from './components/Cart/Cart.js' ;

let productsObj = {
    products: productsList
}

const Main_page = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

const ContainerMain = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: #6171A9;
`

const Menu = styled.header `
    display: flex;
    width: 100vw;
    height: 15vh;
    background-color: #212C58;
    justify-content: center;
    color: #C0CFFA;

    div {
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-between;
    }

    div ul {
        display: flex;
        align-items: center;
        list-style: none;
        width: 45%;
        justify-content: space-around;
        font-weight: bold;
    }

    div ul li a{
        color: #C0CFFA;
        text-decoration: none;
    }

    div ul li div{
        width: 6em;
        height: 2.5em;
        background: #212121;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        color: white;
    }

    div ul li div:hover {
        color: #B4BBCF;
    }

    div ul li a:hover {
        color: #E8EDFD;
    }
`

const Menu_extension = styled.div `
    display: flex;
    width: 100vw;
    height: 85vh;
    background-color: #212C58;
    justify-content: center;
    color: white;

    div {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

    .div-text {
        flex-direction: column;
        width: 25%;
        height: 60%;
        font-size: 1.8rem;
    }

    .div-text h2 {
        line-height: 4rem;
    }

    .div-text p { 
        font-size: 1rem;
        margin-bottom: 10%;
    }

    a {
        text-decoration: none;
    }

    .div-button {
        display: flex;
        height: 2em;
        width: 70%;
        background-color: #212121;
        color: white;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 5px;
    }

    .div-image {
        width: 38%;
        height: 80%;
        margin-right: 3.5%;
    }

    .div-image div {
        width: 100%;
        height: 100%;
        border-radius: 0 0 0 150px;
    }

    .div-image div img {
        width: 100%;
        height: 100%;
        border-radius: 0 0 0 150px;
        background-color: antiquewhite;
    }

`

class App extends React.Component {

    state = {
        minValue: "",
        maxValue: "",
        nameValue: "",
        productsInCart: []
    }

    onChangeMinValue = (event) => this.setState({minValue: event.target.value});
    onChangeMaxValue = (event) => this.setState({maxValue: event.target.value});
    onChangeNameValue = (event) => this.setState({nameValue: event.target.value});

    onAddProductCart = (productId) => {
        const productInCart = this.state.productsInCart.find(product => productId === product.id)

        if (productInCart) {
            const newProductInCart = this.state.productsInCart.map(product =>{
                if(productId === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            });
            this.setState({productsInCart: newProductInCart});
        }else{
            const productToAdd = productsObj.products.find(product => productId === product.id)

            const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity : 1}]

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

            <Main_page>

                <Menu>
                
                    <div>
                        <h1>Universe-Store</h1>
                        <ul>
                            <li>
                                <a href='#'>Produtos</a>
                            </li>
                            <li>
                                <a href='#'>Carrinho</a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div>
                                        <p>Login</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </Menu>

                <Menu_extension>

                    <div>
                        <div className="div-text">
                            <h2>O melhor do universo esperando para ser seu.</h2>
                            <p>Encontre os melhores satélites para a sua empresa!</p>
                            <a href='#products_section'>
                                <div className="div-button">
                                    <p>SHOP NOW</p>
                                </div>
                            </a>
                        </div>
                        <div className="div-image">
                            <div>
                                <img src={productsObj.products[1].photo} alt="imagem satélite"></img>
                            </div>
                        </div>
                    </div>
                    
                </Menu_extension>

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

            </Main_page>
        );
    }
}

export default App;

