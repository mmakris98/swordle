import { useEffect, useState } from 'react';
import { getRandomReferenceAsync } from 'src/apis/bibleapi';
import IReference from 'src/models/IReference';
import { useRootStore } from 'src/stores/RootStoreProvider';

export default function useReference() {
    const {guessStore} = useRootStore();
    const [text, setText] = useState<string>("");

    function setStoreWithReference(ref: IReference){
        setText(ref.text);
        guessStore.setBook(ref.book);

        let numbers = [];
        numbers.push(...getChapterVerseNumbers(ref.chapter));
        numbers.push(...getChapterVerseNumbers(ref.verse));
        guessStore.setNumbers(numbers);
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

    useEffect(() => {
        void getRandomReferenceAsync().then(ref => setStoreWithReference(ref)).catch(e => console.log(e));
    }, [])

    return { text };
}
