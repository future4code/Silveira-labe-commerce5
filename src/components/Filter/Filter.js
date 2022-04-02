import React from "react";
import styled from 'styled-components';

const FilterDiv = styled.div `
    display: flex;
    padding: 8px;
`

const Input = styled.input `
    border: none;
    height: 20px;
    width: 100px;
`

class Filter extends React.Component {
    render(){
        return(
            <FilterDiv>
                <Input 
                    type="number"
                    value={this.props.minValue} 
                    onChange={this.props.onChangeMinValue}
                    placeholder="Valor mínimo"
                />
                <Input 
                    type="number"
                    value={this.props.maxValue} 
                    onChange={this.props.onChangeMaxValue}
                    placeholder="Valor máximo"
                />
                
                <Input 
                    type="text"
                    value={this.props.nameValue} 
                    onChange={this.props.onChangeNameValue}
                    placeholder="Busca por nome"
                />
            </FilterDiv>
        )
    }
}

export default Filter;