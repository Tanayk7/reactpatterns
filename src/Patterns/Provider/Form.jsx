import React,{useContext} from 'react';
import {AppContext, ContextProvider} from './appContext'

const Card = () => {
    const {name,changeName} = useContext(AppContext);

    return (
        <div>
            <input placeholder="Enter Name" value={name} onChange={(e) => changeName(e.target.value)}/>
        </div>
    );
}

const CardParent = () => { 
    return (
        <ContextProvider>
            <Card/>
        </ContextProvider>
    )
}


export default CardParent;
