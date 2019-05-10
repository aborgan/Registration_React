import React, {useState, useReducer} from 'react';
import Registration from './Registration.js';
import Landing from './Landing.js';

export const StateContext = React.createContext();

const reducer = (state, action) => {
    const e = action.e;
    return {...state, [action.type]:e.target.value};
}

const App = _ => {
    const [state, handleUpdate] = useReducer(reducer, {});
    const [isRegistered, updateRegistration] = useState(false);
    const register = _ => updateRegistration(true)
    if(isRegistered) { 
        return (
            <StateContext.Provider value={state}>
                <Landing />
            </StateContext.Provider>
        )
    }
    else {
        return (
            <StateContext.Provider value={state}>
                <Registration handleUpdate={handleUpdate} register={register}/>
            </StateContext.Provider>
        )
    }
};
export default App;