import React from 'react';
import styled from 'styled-components'



const ItemContainer = styled.div`


`
class ShoppingCartItem extends React.Component{


    render () {
        return(
            <ItemContainer>

                <p>{this.props.cartItem.quantity}</p>
                <p>{this.props.cartItem.name}</p>
                <button 
                onClick ={() => this.props.onRemoveProductsFromCart(this.props.cartItem.id)}
                >
                    Remover
                    </button>


            </ItemContainer>
            
        )
    }
}



export default ShoppingCartItem ;