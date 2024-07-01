import { observer } from 'mobx-react';
import { StyledSettingsButton } from './StyledSettingsButton';
import { AnimatedButton } from 'src/animations/AnimatedButton';
import { useRootStore } from 'src/stores/RootStoreProvider';

function SettingsButton(): JSX.Element {
    const { modalStore } = useRootStore();
    
    function openModal(){
        modalStore.openModal(<>hello modal</>);
    }
    
    return (
        <AnimatedButton>
            <StyledSettingsButton onClick={() => openModal()}>
                Settings
            </StyledSettingsButton>
        </AnimatedButton>
    )
} 

export default observer(SettingsButton);