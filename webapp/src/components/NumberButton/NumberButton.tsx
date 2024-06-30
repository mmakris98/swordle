import { observer } from 'mobx-react';
import { StyledNumberButton } from './StyledNumberButton';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { AnimatedButton } from '../../animations/AnimatedButton';

function NumberButton(props: {number: number}): JSX.Element {
    const {guessStore} = useRootStore()

    return (
        <AnimatedButton>
            <StyledNumberButton onClick={() => guessStore.addNumber(props.number)}>
                {props.number}
            </StyledNumberButton>
        </AnimatedButton>
    )
} 

export default observer(NumberButton);