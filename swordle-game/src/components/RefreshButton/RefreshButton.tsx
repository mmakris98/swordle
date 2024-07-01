import { observer } from 'mobx-react';
import { StyledRefreshButton } from './StyledRefreshButton';
import { AnimatedButton } from 'src/animations/AnimatedButton';
import useReference from '../GameSpace/useReference';

function RefreshButton(): JSX.Element {
    const { getVerse } = useReference();
    
    return (
        <AnimatedButton>
            <StyledRefreshButton onClick={getVerse}>
                New Verse
            </StyledRefreshButton>
        </AnimatedButton>
    )
} 

export default observer(RefreshButton);