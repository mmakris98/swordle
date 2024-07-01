import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { bookList } from "src/components/BookSelect/BookList";
import { isActualEarlierInBible } from "./GuessStoreFunctions";

export class GuessStore {
    rootStore: RootStore;
    // actual //
    text: string = '';
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
            text: observable,
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

    setText = action((text: string) => {
        this.text = text;
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

        // don't change correct ones
        let correctBox = this.numbers[index] === nums[index];
        if (!correctBox){
            nums[this.selectedInput] = -1;
            this.numbersGuess = nums;
        }
        
        // don't change box if not empty
        let emptyBox = nums[index] === -1;
        if (emptyBox || correctBox){
            this.selectedInput = index === 0 ? 3 : index-1
        }
    });

    clearGuess = action(() => {
        this.bookGuess = '';
        this.numbersGuess = [-1, -1, -1, -1];
    })

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