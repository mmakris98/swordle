import Back from '../Back/Back';
import Enter from '../Enter/Enter';
import { StyledBackEnter } from './StyledBackEnter';

export function BackEnter(): JSX.Element {  
    return (
        <StyledBackEnter>
            <Back/>
            <Enter/>
        </StyledBackEnter>
    )
} 
