import { observer } from 'mobx-react';
import { StyledVerseText } from './StyledVerseText';
import { useRootStore } from 'src/stores/RootStoreProvider';

function VerseText(): JSX.Element {
    const { guessStore } = useRootStore();
    
    return (
        <StyledVerseText>
            {guessStore.text}
        </StyledVerseText>
    )
} 

export default observer(VerseText);