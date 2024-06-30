import { observer } from 'mobx-react';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { StyledModal } from './StyledModal';
import Backdrop from './Backdrop';
import { AnimatedDropIn } from 'src/animations/AnimatedDropIn';

function Modal() {
  const { modalStore } = useRootStore();

  return (
    <Backdrop onClose={() => modalStore.closeModal()}>
      <AnimatedDropIn>
        <StyledModal>
          Modal
        </StyledModal>
      </AnimatedDropIn>
    </Backdrop>
  );
}

export default observer(Modal);