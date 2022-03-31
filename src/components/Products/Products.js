import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from '../data/products';
import styled from 'styled-components';

const ProductCardDiv = styled.div`
  display: flex,
  flex-direction: row;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
`
const CardsProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

class Products extends React.Component {
  productsObj = {
    products: data
  }
    getFilteredList = () => {
        // this.props.products
        //     .filter((obj) => obj.price < maxValue)
        //     .filter((obj) => obj.price > minValue)
        //     .filter((obj) => obj.name.includes(this.props.nameValue))
            // .sort((a, b) => )
    }

    render(){
        // const filteredList = this.getFilteredList();

        const componentsProduct = this.productsObj.products.map((prod) => {
            return (
              <ProductCard
                key={prod.id}
                name={prod.name}
                price={prod.price}
                photo={prod.photo}
              />
            );
          });

        return(
            <ProductCardDiv>
                <Header>
                    <p>Quantidade produtos: {this.productsObj.products.length}</p>
                    <p>
                        Ordenação
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </p>
                </Header>

                <CardsProducts>
                    {componentsProduct}
                </CardsProducts>
            </ProductCardDiv>
        )
    }
}

export default Products;