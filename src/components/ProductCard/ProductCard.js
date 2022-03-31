import React from "react";
import styled from 'styled-components'

const ContainerProdutos = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`
const ProductsFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`
const ProductPhoto = styled.img`
    width: 100%;
`;
const ProductButton = styled.button`
    align-self: center;
    margin-top: 4px;
`



class ProductCard extends React.Component {

    render(){
        const product = this.props.products;
        return(
            <div>
                <img src={product.photo} alt="imagem" />
                <div>
                    <p>{product.name}</p>
                    <p>R${product.price},00</p>
                    <button>Adicionar Carrinho</button>
                </div>
            </div>


    state = {
        cart: false 
    }

    onClickAddCart = () => {
        this.setState({cart: !this.state.cart});
    };

    render() {
        return (
            <ContainerProdutos>
                <ProductPhoto src={this.props.photo} alt={"Imagem Photo"} />
                <ProductsFooter>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                    <ProductButton onClick={this.onClickAddCart}>Adicionar ao carrinho</ProductButton>
                </ProductsFooter>
            </ContainerProdutos>

        )
    }
}

export default ProductCard;