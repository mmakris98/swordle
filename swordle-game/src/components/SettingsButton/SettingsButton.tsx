import { observer } from 'mobx-react';
import { StyledSettingsButton } from './StyledSettingsButton';
import { AnimatedButton } from 'src/animations/AnimatedButton';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { StyledSettingsSelect } from '../Settings/StyledSettingsSelect';

function SettingsButton(): JSX.Element {
    const { modalStore } = useRootStore();
    
    function openModal(){
        modalStore.openModal(<StyledSettingsSelect/>);
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