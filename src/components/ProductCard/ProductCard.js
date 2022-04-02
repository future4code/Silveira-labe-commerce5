import React from "react";
import styled from 'styled-components'
import Img_carrinho from '../../data/img/carrinho-de-compras.png'

const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
`

const Name_price = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #6171A9;
    color: white;
`

const ProductsFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-left: 8%;
    line-height: 0px;
`

const ProductPhoto = styled.img`
    width: 100%;
    height: 100%;
`
const ProductButton = styled.button`
    border: none;
    border-radius: 20px;
    background: none;
    align-self: center;
    justify-content: center;
    margin-right: 8%;
    text-align: center;
    width: 40px;
    height: 40px;
    -webkit-transition: 0.2s;
    transition: 0.2s;

    img {
        width: 20px;
        height: 20px;
    }

    img:hover {
        width: 21px;
        height: 21px;
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }

    &:active {
        background: #43434329;
    }
`
const Text_product = styled.p `
    font-weight: bold;
`

const Text = styled.p `
    font-size: 0.8rem;
`

class ProductCard extends React.Component {

    state = {
        cart: false,
        qnt: 0,
        produto: ""
    }
 
    render() {
        const product = this.props.products;

        return (
            <ContainerProdutos>
                <ProductPhoto src={product.photo} alt={"Imagem Photo"} />
                <Name_price>
                    <ProductsFooter>
                        <Text_product>{product.name}</Text_product>
                        <Text>R${product.price}</Text> 
                    </ProductsFooter>
                    <ProductButton onClick={() => this.props.onAddProductCart(product.id)}>
                            <img src={Img_carrinho}></img>
                    </ProductButton>
                </Name_price>
            </ContainerProdutos>
        )
    }
}

export default ProductCard;