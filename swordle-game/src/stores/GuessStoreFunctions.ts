export function isActualEarlierInBible(guess: number[], actual: number[]): boolean {
    if (guess[0] > actual[0]){
        return true;
    } else if (guess[0] < actual[0]) {
        return false;
    }

    if (guess[1] > actual[1]){
        return true;
    } else if (guess[1] < actual[1]) {
        return false;
    }

    if (guess[2] > actual[2]){
        return true;
    } else if (guess[2] < actual[2]) {
        return false;
    }

    if (guess[3] > actual[3]){
        return true;
    } else if (guess[3] < actual[3]) {
        return false;
    }

    if (guess[4] > actual[4]){
        return true;
    } else if (guess[4] < actual[4]) {
        return false;
    }
}