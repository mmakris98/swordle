import { observer } from 'mobx-react';
import { StyledVersionSelect } from './StyledVersionSelect';
import { StyledVersionSelectOption } from './StyledVersionSelectOption';
import { useRootStore } from 'src/stores/RootStoreProvider';
import { useState } from 'react';
import { versionList } from './VersionList';

function VersionSelect(): JSX.Element {
    const { guessStore } = useRootStore();
    const versions = versionList;
    
    const updateInputValue = (value: string): void => {

    };

    return (
        <StyledVersionSelect title='book select' defaultValue={'ESV'} onChange={e => updateInputValue(e.target.value)}>
            {versions.map(vers => <StyledVersionSelectOption key={'versionOp-'+vers} value={vers}>{vers}</StyledVersionSelectOption>)}
        </StyledVersionSelect>
    )
} 

export default observer(VersionSelect)
