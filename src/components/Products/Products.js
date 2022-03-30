import React from "react";
import ProductCard from "../productCard/productCard";

class Products extends React.Component {

    getFilteredList = () => {
        this.props.products
            .filter((obj) => obj.price < maxValue)
            .filter((obj) => obj.price > minValue)
            .filter((obj) => obj.name.includes(this.props.nameValue))
            // .sort((a, b) => )

    }

    render(){
        const filteredList = this.getFilteredList();
        return(
            <div className={"container-products"}>
                <header className={"header-products"}>
                    <p>Quantidade de produtos: 4</p>
                    <label>
                        Ordenação:
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </label>
                </header>
                <div className={"product-box"}>
                    {filteredList.map((obj) => {
                        return <ProductCard product={obj}/>
                    })}
                </div>

            </div>
        )
    }
}

export default Products;