import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
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
    state = {
        products: [
          {
            id: 1,
            name: "Produto 1",
            price: 100,
            photo: 'https://picsum.photos/200/200'
          },
          {
            id: 2,
            name: "Produto 2",
            price: 100,
            photo: 'https://picsum.photos/200/200'
          },
          {
            id: 3,
            name: "Produto 3",
            price: 100,
            photo: 'https://picsum.photos/200/200'
          },
          {
            id: 4,
            name: "Produto 4",
            price: 100,
            photo: 'https://picsum.photos/200/200'
          },
        ],

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

        const componentsProduct = this.state.products.map((prod) => {
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
                    <p>Quantidade produtos: {this.state.products.length}</p>
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