import BookSelect from '../BookSelect/BookSelect';
import { ColonBreak } from '../ColonBreak/ColonBreak';
import NumberInput from '../NumberInput/NumberInput';
import { StyledGuessNumbers } from './StyledGuessNumbers';

function GuessNumbers(): JSX.Element {
    return (
        <StyledGuessNumbers>
            <NumberInput index={0}/>
            <NumberInput index={1}/>
            <ColonBreak/>
            <NumberInput index={2}/>
            <NumberInput index={3}/>
        </StyledGuessNumbers>
    )
} 

export default GuessNumbers;