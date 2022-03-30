import React from 'react';
import Products from './components/products/products';

let products = [
  {
    id: 1,
    name: "Produto 1",
    price: 100,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: "Produto 2",
    price: 100,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: "Produto 3",
    price: 100,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: "Produto 4",
    price: 100,
    photo: 'https://picsum.photos/200/200?a=4'
  },
]

class App extends React.Component {

  state = {
    minValue: "",
    maxValue: "",
    nameValue: ""
  }

  render() {
    return (
      <div>
        <Products
          products={products}
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          nameValue={this.state.nameValue}/>
      </div>
    );
  }
}

export default App;