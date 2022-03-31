import React from 'react';
import Products from './components/Products/Products';
import styled from 'styled-components';

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
    minValue: "",
    maxValue: "",
    nameValue: ""
  }

  render() {
    return (
      <ContainerMain>
        <Filter>
          Filtro
        </Filter>

        <Products
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          nameValue={this.state.nameValue} />

        <Cart>
          Carrinho
        </Cart>
        
      </ContainerMain>
    );
  }
}

export default App;