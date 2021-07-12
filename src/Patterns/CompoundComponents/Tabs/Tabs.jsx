import React,{useState} from 'react';
import {tabContext} from './tabContext';
import Tab from './Tab';
import TabPanel from './TabPanel';

const {Provider} = tabContext;

const Tabs = ({children}) => {
    const [activeId,setActiveId] = useState('a');
    const handleClick = (id) => {
        setActiveId(id);
    }

    return (
        <Provider value={{activeId,handleClick}}>{children}</Provider>
    );
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
