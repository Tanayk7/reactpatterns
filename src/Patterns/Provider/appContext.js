import React from 'react';

export const AppContext = React.createContext({});
const { Provider } = AppContext;

export const ContextProvider = (props) => {
    const [name, setName] = React.useState("Tanay Kulkarni");
    const changeName = (new_name) => {
        setName(new_name);
        console.log("New name set!!");
    }

    return <Provider value={{ name, changeName }}> {props.children} </Provider>
}
