import styled from "styled-components";

export const StyledNumberInput = styled.div<{ $color?: string; $borderColor?: string; $selected?: boolean }>`
    width: 35px;
    height: 35px;
    font-size: 20px;
    background: ${props => props.$color ? props.$color : 'black'};
    border-style: solid;
    border-color: ${props => props.$borderColor ? props.$borderColor : 'white'};
    border-width: 1px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    box-shadow: ${props => props.$selected ? '0 0 5px 1px white' : 'none'}
`