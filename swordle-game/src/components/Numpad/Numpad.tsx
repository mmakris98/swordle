import NumberButton from '../NumberButton/NumberButton';
import { StyledNumpad } from './StyledNumpad';

export function Numpad(props: {numbers: number[]}): JSX.Element {  
    return (
        <StyledNumpad>
            {props.numbers.map(number => <NumberButton key={'numpad-'+number} number={number}/>)}
        </StyledNumpad>
    )
} 
