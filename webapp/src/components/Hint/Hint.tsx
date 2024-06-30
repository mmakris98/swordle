import { observer } from 'mobx-react';
import { StyledHint } from './StyledHint';
import { useRootStore } from 'src/stores/RootStoreProvider';

function Hint(): JSX.Element {  
    const {guessStore} = useRootStore();

    return (
        <StyledHint>
            {guessStore.hint}
        </StyledHint>
    )
} 

export default observer(Hint);