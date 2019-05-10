import React, {useContext} from 'react';
import {StateContext} from './App.js';
import '../css/landing.css'

const landing = props => {
    const state = useContext(StateContext);
    return (
    <div className="landing-container">
        <h1 className="center">Welcome</h1>
        <p className="center"><strong>Name: </strong>{state.name}</p>
    </div>
    )
};

export default landing;