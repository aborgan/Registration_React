import React, {useState, useReducer} from 'react';
import Registration from './Registration.js';
import Landing from './Landing.js';

const reducer = (state, action) => {
    const e = action.e;
    return {...state, [action.type]:e.target.value};
}

const App = _ => {
    const [state, handleUpdate] = useReducer(reducer, {});
    const [isRegistered, updateRegistration] = useState(false);
    const register = _ => updateRegistration(true)
    if(isRegistered) return <Landing state={state}/>
    else return <Registration state={state} handleUpdate={handleUpdate} register={register}/>
};
export default App;
