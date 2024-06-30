import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { bookList } from "src/components/BookSelect/BookList";
import { isActualEarlierInBible } from "./GuessStoreFunctions";

export class GuessStore {
    rootStore: RootStore;
    // actual //
    book: string = '';
    numbers: number[] = [-1, -1, -1, -1];
    // guess //
    bookGuess: string = '';
    numbersGuess: number[] = [-1, -1, -1, -1];
    // selected //
    selectedInput: number = 0;
    // hint //
    hint: string = '';

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            book: observable,
            numbers: observable.shallow,
            bookGuess: observable,
            numbersGuess: observable.shallow,
            selectedInput: observable,
            hint: observable,
        })
    }

    // actual //

    setBook = action((book: string) => {
        this.book = book;
    });

    setNumbers = action((numbers: number[]) => {
        this.numbers = numbers;
    });

    // guess //

    setBookGuess = action((book: string) => {
        this.bookGuess = book;
    });

    addNumber = action((number: number) => {
        let index = this.selectedInput;
        let nums = [ ...this.numbersGuess ]
        nums[index] = number;
        this.numbersGuess = nums;
        this.selectedInput = index === 3 ? 0 : index+1
    });

    removeNumber = action(() => {
        let index = this.selectedInput;
        let nums = [ ...this.numbersGuess ]
        let emptyBox = nums[this.selectedInput] === -1;
        nums[this.selectedInput] = -1;
        this.numbersGuess = nums;
        if (emptyBox){
            this.selectedInput = index === 0 ? 3 : index-1
        }
    });

    // selected //

    setSelected = action((index: number) => {
        this.selectedInput = index;
    })

    // hint //

    generateHint = action(() => {
        let actualIndex = bookList.findIndex(book => book === this.book);
        let guessIndex = bookList.findIndex(book => book === this.bookGuess);
        let guess = [ guessIndex, ...this.numbersGuess ];
        let actual = [ actualIndex, ...this.numbers ];
        let earlier = isActualEarlierInBible(guess, actual)
        if (earlier){
            this.hint = "earlier in the bible";
        } else {
            this.hint = "later in the bible";
        }   
    })
}