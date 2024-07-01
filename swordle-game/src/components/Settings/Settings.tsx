import { observer } from 'mobx-react';
import { StyledSettingsSelect } from './StyledSettingsSelect';
import { StyledSettingsSelectOption } from './StyledSettingsSelectOption';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { versionList } from './VersionList';
import { testamentList } from './TestamentList';

function Settings(): JSX.Element {
    const { settingsStore } = useRootStore();

    return (
        <>
            <StyledSettingsSelect title='version select' onChange={e => settingsStore.setVersion(e.target.value)}>
                {versionList.map(version => <StyledSettingsSelectOption key={'versOp-'+version} value={version}>{version}</StyledSettingsSelectOption>)}
            </StyledSettingsSelect>
            <StyledSettingsSelect title='version select' onChange={e => settingsStore.setTestament(e.target.value)}>
                {testamentList.map(testament => <StyledSettingsSelectOption key={'versOp-'+testament} value={testament}>{testament}</StyledSettingsSelectOption>)}
            </StyledSettingsSelect>
        </>
    )
} 

export default observer(Settings)
