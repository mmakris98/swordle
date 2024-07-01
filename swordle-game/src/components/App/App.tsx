import { observer } from 'mobx-react';
import GameSpace from '../GameSpace/GameSpace';
import { StyledApp } from './StyledApp';

function App() {
  return (
    <StyledApp>
      <GameSpace/>   
    </StyledApp>
  );
}

export default observer(App);