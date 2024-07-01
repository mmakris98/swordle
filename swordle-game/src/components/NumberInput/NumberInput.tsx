import { useEffect, useState } from 'react';
import { StyledNumberInput } from './StyledNumberInput';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { observer } from 'mobx-react';

function NumberInput(props: {index: number, selected?: boolean}): JSX.Element {
    const { guessStore } = useRootStore();
    
    const [number, setNumber] = useState<number>(null);
    const [color, setColor] = useState<string>(null);
    const [borderColor, setBorderColor] = useState<string>(null);
    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        let number = guessStore.numbersGuess[props.index];
        if (number === -1) number = null;
        setNumber(number);
        
        let correctNumber = number === guessStore.numbers[props.index];
        if (correctNumber) {
            setColor('green');
        } else {
            setColor(null);
        }

        let correctMatches = guessStore.numbers.filter(guess => guess === number).length
        if (correctNumber && correctMatches === 1){
            setBorderColor('green');
        } else if (correctMatches > 0) {
            setBorderColor('yellow');
        } else {
            setBorderColor(null);
        }
    }, [guessStore.numbersGuess])

    useEffect(() => {
        let currentInput = guessStore.selectedInput === props.index;
        if(currentInput){
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [guessStore.selectedInput])

    function selectThisInput(){
        guessStore.setSelected(props.index)    
    }

    return (
        <StyledNumberInput $color={color} $borderColor={borderColor} $selected={selected} onClick={(() => selectThisInput())}>
            {number}
        </StyledNumberInput>
    )
} 

export default observer(NumberInput);