import { StyledVerseText } from './StyledVerseText';

export function VerseText(props: {verseText: string}): JSX.Element {
    return (
        <StyledVerseText>
            {props.verseText}
        </StyledVerseText>
    )
} 
