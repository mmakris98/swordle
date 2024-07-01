import styled from "styled-components";

export const StyledBookSelect = styled.select<{ color?: string; }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 65px;
    background: ${props => props.color ? props.color : 'black'};
    color: white;
    border-style: solid;
    border-color: ${props => props.color ? props.color : 'white'};
    border-width: 1px;
    border-radius: 8px;
    width: 220px;
    height: 35px;
`