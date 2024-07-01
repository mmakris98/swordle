import { observer } from 'mobx-react';
import { StyledHeader } from './StyledHeader';
import SettingsButton from '../SettingsButton/SettingsButton';
import Title from '../Title/Title';
import RefreshButton from '../RefreshButton/RefreshButton';

function Header(): JSX.Element {
    return (
        <StyledHeader>
            <RefreshButton />
            <Title />
            <SettingsButton />
        </StyledHeader>
    )
} 

export default observer(Header);