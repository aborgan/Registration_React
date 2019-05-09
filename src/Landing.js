import React from 'react';
import '../css/landing.css'

const landing = props => {
    const state = props.state
    return (
    <div className="landing-container">
        <h1 className="center">Welcome</h1>
        <p className="center"><strong>Name: </strong>{state.name}</p>
    </div>
    )
};

export default landing;