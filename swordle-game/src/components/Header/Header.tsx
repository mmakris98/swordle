import { observer } from 'mobx-react';
import { StyledHeader } from './StyledHeader';
import SettingsButton from '../SettingsButton/SettingsButton';
import Title from '../Title/Title';

function Header(): JSX.Element {
    return (
        <StyledHeader>
            <Title />
            <SettingsButton />
        </StyledHeader>
    )
} 

export default observer(Header);