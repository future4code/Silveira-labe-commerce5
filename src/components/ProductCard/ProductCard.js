import React from "react";



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
        )
    }
}

export default ProductCard;