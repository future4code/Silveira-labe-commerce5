import React from "react";
import styled from 'styled-components';

const FilterDiv = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 8px;
`

const Label = styled.label `
    display: flex;
    flex-direction: column;
`

class Filter extends React.Component {
    render(){
        return(
            <FilterDiv>
                <h3>Filtros</h3>
                <Label>
                    Valor mínimo:
                    <input 
                    type="number"
                    value={this.props.minValue} 
                    onChange={this.props.onChangeMinValue}
                    />
                </Label>
                <Label>
                    Valor máximo:
                    <input 
                    type="number"
                    value={this.props.maxValue} 
                    onChange={this.props.onChangeMaxValue}
                    />
                </Label>
                <Label>
                    Busca por nome:
                    <input 
                    type="text"
                    value={this.props.nameValue} 
                    onChange={this.props.onChangeNameValue}
                    />
                </Label>
            </FilterDiv>
        )
    }
}

export default Filter;