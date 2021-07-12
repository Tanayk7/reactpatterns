import React, {useContext} from 'react';
import {tabContext} from './tabContext';

const Tab = ({children,id}) => {
    const {handleClick} = useContext(tabContext);
    const selectTab = () => {
        handleClick(id);
    }

    return <button onClick={selectTab}>{children}</button>
}

export default Tab;
