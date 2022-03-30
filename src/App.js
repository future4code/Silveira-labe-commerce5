import React from 'react';
import Filter from './components/Filter/Filter';
import Products from './components/Products/Products';

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
    price: 150,
    photo: 'https://picsum.photos/200/200?a=4'
  },
]

class App extends React.Component {

  state = {
    minValue: "",
    maxValue: "",
    nameValue: ""
  }

  onChangeMinValue = (event) => this.setState({minValue: event.target.value});
  onChangeMaxValue = (event) => this.setState({maxValue: event.target.value});
  onChangeNameValue = (event) => this.setState({nameValue: event.target.value});

  render() {
    return (
      <div>
        <Filter
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          nameValue={this.state.nameValue}
          onChangeMinValue={this.onChangeMinValue}
          onChangeMaxValue={this.onChangeMaxValue}
          onChangeNameValue={this.onChangeNameValue}
          />
        <Products 
          products={products}
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          nameValue={this.state.nameValue} />
      </div>
    );
  }
}

export default App;