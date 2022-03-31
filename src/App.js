import React from 'react';

import productsList from './data/products.json'
import Filter from './components/Filter/Filter';
import Products from './components/Products/Products';
import styled from 'styled-components';


import Products from './components/Products/Products';
import styled from 'styled-components';


let productsObj = {
  products: productsList
}

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`

const Filter = styled.div`
  border: 1px solid black;
  padding: 8px;
`

const Cart = styled.div`
  border: 1px solid black;
  padding: 8px;
`

class App extends React.Component {

  state = {
    minValue: 1,
    maxValue: 2000,
    nameValue: ""
  }

  onChangeMinValue = (event) => this.setState({minValue: event.target.value});
  onChangeMaxValue = (event) => this.setState({maxValue: event.target.value});
  onChangeNameValue = (event) => this.setState({nameValue: event.target.value});

  render() {
    return (
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

        <Filter>
          Filtro
        </Filter>

        <Products

          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          nameValue={this.state.nameValue} />

          <Cart></Cart>

        <Cart>
          Carrinho
        </Cart>
        

      </ContainerMain>
    );
  }
}

export default App;