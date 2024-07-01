import { observer } from 'mobx-react';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { StyledModal } from './StyledModal';
import Backdrop from './Backdrop';
import { AnimatedDropIn } from 'src/animations/AnimatedDropIn';
import { StyledSettingsSelect } from '../Settings/StyledSettingsSelect';
import { StyledSettingsSelectOption } from '../Settings/StyledSettingsSelectOption';
import { testamentList } from '../Settings/TestamentList';
import { versionList } from '../VersionSelect/VersionList';

function Modal() {
  const { modalStore, settingsStore } = useRootStore();

  return (
    <Backdrop onClose={() => modalStore.closeModal()}>
      <AnimatedDropIn>
        <StyledModal>
          {/* modalStore.body */}
          Version
          <StyledSettingsSelect title='version select' defaultValue={settingsStore.version} onChange={e => settingsStore.setVersion(e.target.value)}>
              {versionList.map(version => <StyledSettingsSelectOption key={'versOp-'+version} value={version}>{version}</StyledSettingsSelectOption>)}
          </StyledSettingsSelect>
          <hr/>
          Testament
          <StyledSettingsSelect title='version select' defaultValue={settingsStore.testament} onChange={e => settingsStore.setTestament(e.target.value)}>
              {testamentList.map(testament => <StyledSettingsSelectOption key={'versOp-'+testament} value={testament}>{testament}</StyledSettingsSelectOption>)}
          </StyledSettingsSelect>
        </StyledModal>
      </AnimatedDropIn>
    </Backdrop>
  );
}

export default observer(Modal);