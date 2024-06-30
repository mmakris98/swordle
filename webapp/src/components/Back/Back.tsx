import { observer } from 'mobx-react';
import { StyledBack } from './StyledBack';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { AnimatedButton } from 'src/animations/AnimatedButton';

function Back(): JSX.Element {
    const {guessStore} = useRootStore();

    return (
        <AnimatedButton>
            <StyledBack onClick={() => guessStore.removeNumber()}>
                Undo
            </StyledBack>
        </AnimatedButton>
    )
} 

export default observer(Back);