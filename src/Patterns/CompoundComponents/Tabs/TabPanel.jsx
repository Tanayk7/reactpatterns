import React,{useContext} from 'react';
import {tabContext} from './tabContext';

const TabPanel = ({children,id}) => {
    const {activeId} = useContext(tabContext);

    return (
        <>{activeId === id && children}</>
    );
}

export default TabPanel;
