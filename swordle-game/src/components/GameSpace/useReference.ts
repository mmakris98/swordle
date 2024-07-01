import { useEffect } from 'react';
import { getRandomReferenceAsync } from 'src/apis/bibleapi';
import IReference from 'src/models/IReference';
import { useRootStore } from 'src/stores/RootStoreProvider';

export default function useReference() {
    const {guessStore, settingsStore} = useRootStore();

    function setStoreWithReference(ref: IReference){
        guessStore.setText(ref.text);
        guessStore.setBook(ref.book);

        let numbers = [];
        numbers.push(...getChapterVerseNumbers(ref.chapter));
        numbers.push(...getChapterVerseNumbers(ref.verse));
        guessStore.setNumbers(numbers);
        guessStore.clearGuess();
    }

    function getChapterVerseNumbers(number: string){
        let first = 0;
        let second = 0;
        if (number.length === 1){
            second = parseInt(number[0]);
        } else if (number.length === 2) {
            first = parseInt(number[0]);
            second = parseInt(number[1]);
        }
        return [first, second]
    }

    async function getVerse() {
        await getRandomReferenceAsync(settingsStore.version, settingsStore.testament).then(ref => setStoreWithReference(ref)).catch(e => console.log(e));
    }

    useEffect(() => {
        void getVerse();
    }, [])

    return { getVerse };
}
