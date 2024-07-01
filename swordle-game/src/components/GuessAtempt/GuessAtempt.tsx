import BookSelect from '../BookSelect/BookSelect';
import GuessNumbers from '../GuessNumbers/GuessNumbers';
import { StyledGuessAtempt } from './StyledGuessAtempt';

function GuessAtempt(): JSX.Element {
    return (
        <StyledGuessAtempt>
            <BookSelect />
            <GuessNumbers />
        </StyledGuessAtempt>
    )
} 

export default GuessAtempt;