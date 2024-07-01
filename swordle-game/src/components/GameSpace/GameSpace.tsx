import { useRootStore } from 'src/stores/RootStoreProvider';
import { BackEnter } from '../BackEnter/BackEnter';
import GuessAtempt from '../GuessAtempt/GuessAtempt';
import Header from '../Header/Header';
import Hint from '../Hint/Hint';
import { Numpad } from '../Numpad/Numpad';
import VerseText from '../VerseText/VerseText';
import { StyledGameSpace } from './StyledGameSpace';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

function GameSpace(): JSX.Element {
    const { modalStore } = useRootStore();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        setModalOpen(modalStore.open);
    }, [modalStore.open])

    return (
        <StyledGameSpace>
            {modalOpen && <Modal/>}
            <Header />
            <hr/>
            <VerseText/>
            <hr/>
            <GuessAtempt/>
            <hr/>
            <Numpad numbers={[0, 1, 2, 3, 4]}/>
            <Numpad numbers={[5, 6, 7, 8, 9]}/>
            <BackEnter/>
            <Hint />
        </StyledGameSpace>
    )
} 

export default observer(GameSpace)