import { useState, useEffect } from 'react';

let globalStore = [];
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    const setState = useState(globalStore)[1];

    const dispatch = (actionType, payload = null) => {
        const newState = actions[actionType](globalStore, payload);
        globalStore = { ...globalStore, ...newState };

        for (let listener of listeners) {
            listener(globalStore);
        }
    }

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                listeners = listeners.filter(listener => listener !== setState);
            }
        }
    }, [setState])

    return [globalStore, dispatch]
}

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalStore = { ...globalStore, ...initialState };
    }

    actions = { ...actions, ...userActions };

    console.log("Actions initialized: ", actions);
    console.log("Global store initialized: ", globalStore);
}