import React from "react";

class Filter extends React.Component {
    render(){
        return(
            <div>
                <h3>Filtros</h3>
                <label>
                    Valor mínimo:
                    <input 
                    type="number"
                    value={this.props.minValue} 
                    onChange={this.props.onChangeMinValue}
                    />
                </label>
                <label>
                    Valor máximo:
                    <input 
                    type="number"
                    value={this.props.maxValue} 
                    onChange={this.props.onChangeMaxValue}
                    />
                </label>
                <label>
                    Busca por nome:
                    <input 
                    type="text"
                    value={this.props.nameValue} 
                    onChange={this.props.onChangeNameValue}
                    />
                </label>
            </div>
        )
    }
}

export default Filter;