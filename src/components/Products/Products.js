import React from "react";
import ProductCard from "../ProductCard/ProductCard";

class Products extends React.Component {

    state = {
        sort: "CRESCENTE"
    }

    getFilteredList = () => {
        this.props.products
            .filter((obj) => obj.price < this.props.maxValue)
            .filter((obj) => obj.price > this.props.minValue)
            .filter((obj) => obj.name.includes(this.props.nameValue))
            .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
    }

    render(){
        const filteredList = this.getFilteredList();
        return(
            <div className={"container-products"}>
                <header className={"header-products"}>
                    <p>Quantidade de produtos: {filteredList.length}</p>
                    <label>
                        Ordenação:
                        <select value={this.state.sort}>
                            <option value="CRESCENTE">Crescente</option>
                            <option value="DECRESCENTE">Decrescente</option>
                        </select>
                    </label>
                </header>
                <div className={"product-box"}>
                    {filteredList.map((obj) => {
                        return <ProductCard products={obj}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Products;