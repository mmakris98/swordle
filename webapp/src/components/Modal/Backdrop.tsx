import { observer } from 'mobx-react';
import { StyledBackdrop } from './StyledBackdrop';
import { AnimatedFadeInOut } from 'src/animations/AnimatedFadeInOut';

function Backdrop({children, onClose}) {
  return (
    <AnimatedFadeInOut>
        <StyledBackdrop onClick={onClose}>
            {children}
        </StyledBackdrop>
    </AnimatedFadeInOut>
  );
}

export default observer(Backdrop);