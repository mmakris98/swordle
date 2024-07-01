import { observer } from 'mobx-react';
import { StyledBookSelect } from './StyledBookSelect';
import { StyledBookSelectOption } from './StyledBookSelectOption';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { useState } from 'react';
import { bookList } from './BookList';

function BookSelect(): JSX.Element {
    const { guessStore } = useRootStore();
    const [color, setColor] = useState<string>(null);
    
    const updateInputValue = (value: string): void => {
        guessStore.setBookGuess(value);
        if (value === guessStore.book && value !== '') {
            setColor('green')
        } else {
            setColor(null);
        }
    };

    return (
        <StyledBookSelect title='book select' value={guessStore.bookGuess} color={color} onChange={e => updateInputValue(e.target.value)}>
            <StyledBookSelectOption value=''></StyledBookSelectOption>
            {bookList.map(book => <StyledBookSelectOption key={'bookOp-'+book} value={book}>{book}</StyledBookSelectOption>)}
        </StyledBookSelect>
    )
} 

export default observer(BookSelect)
