import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from 'styled-components';

const ProductCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
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
    sort: "CRESCENTE"
  }

  getFilteredList = () => {
    return this.props.products
    .filter((obj) => this.props.maxValue === "" || obj.price <= this.props.maxValue)
    .filter((obj) => this.props.minValue === "" ||  obj.price >= this.props.minValue)
    .filter((obj) => obj.name.toLowerCase().includes(this.props.nameValue.toLowerCase()))
    .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
  }

  onChangeSelect = (event) => this.setState({sort: event.target.value});

  render(){
    const filteredList = this.getFilteredList();
    return(
      <ProductCardDiv>
          <Header>
            <p>Quantidade de produtos: {filteredList.length}</p>
            <label>
                Ordenação:
                <select value={this.state.sort} onChange={this.onChangeSelect}>
                    <option value="CRESCENTE">Crescente</option>
                    <option value="DECRESCENTE">Decrescente</option>
                </select>
            </label>
            </Header>
            <CardsProducts>
              {filteredList.map((obj) => {
                return <ProductCard 
                          products={obj}
                          onAddProductCart={this.props.onAddProductCart}
                          />
              })}
            </CardsProducts>
      </ProductCardDiv>
    )
  }
}

export default Products;
