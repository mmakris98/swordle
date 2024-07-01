import { observer } from 'mobx-react';
import { StyledEnter } from './StyledEnter';
import { AnimatedButton } from 'src/animations/AnimatedButton';
import { useRootStore } from 'src/stores/RootStoreProvider';

function Enter(): JSX.Element {
    const { modalStore, guessStore } = useRootStore();
    
    function openModal(){
        modalStore.openModal(<>hello modal</>);
    }
    
    return (
        <AnimatedButton>
            <StyledEnter onClick={() => guessStore.generateHint()}>
                Hint
            </StyledEnter>
        </AnimatedButton>
    )
} 

export default observer(Enter);