import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from '../data/products';
import styled from 'styled-components';

const ProductCardDiv = styled.div`
  display: flex;
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

    state = {
        sort: ""
    }

    getFilteredList = () => {
 
        return this.props.products
            .filter ( (obj) => this.props.maxValue === "" || obj.price <= this.props.maxValue )
            .filter ( (obj) => this.props.minValue === "" || obj.price >= this.props.minValue )
            .filter ( (obj) => obj.name.toUpperCase().includes(this.props.namevalue.toLowerCase()))
            .sort ((a,b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)


    }

    onChangeSelect = (event) => this.setState({sort:event.target.value});
    

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