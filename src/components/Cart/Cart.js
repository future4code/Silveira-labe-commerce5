import React from 'react';
import styled from 'styled-components';
// import ProductCard from "../ProductCard/ProductCard";
import ShoppingCartItem from'../Cart/ShoppingCartItem';

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  
`

const NomeProduto = styled.div`
  border: 1px solid black;
  
`

// const RemoverButton = styled.button`

// `


class Cart extends React.Component{

    getTotalValue = ()=> {
        let totalValue = 0;

        for ( let product of this.props.productsInCart) {
            totalValue += product.price * product.quantity;
        }
        return totalValue;
    }

    render(){
        return (

            <MainContainer>
                <h3>SEU CARRINHO DE COMPRAS</h3>
                <NomeProduto>
                    {this.props.productsInCart.map((product) => {
                        return <ShoppingCartItem
                            cartItem={product} onRemoveProductsFromCart={this.props.onRemoveProductsFromCart}/>
                    })}

                </NomeProduto>
                <p>Valor Total do Carrinho: R${this.getTotalValue()},00</p>
            </MainContainer>

        )

    }
}
export default Cart;