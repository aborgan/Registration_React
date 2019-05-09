import React, {useCallback, useState} from 'react';
import '../css/registration.css';
import FormTextField from './FormTextField';

const Container = props => {
    const state = props.state;
    const handleUpdate = props.handleUpdate;
    const [isMale, updateIsMale] = useState(false);
    const changeMale = _ => updateIsMale(!isMale);
    const handleSubmit = useCallback(e => {
        e.preventDefault();
        if (state.password !== state["re-enter password"]) {
            alert("Your passwords don't match!");
            return;
        }
        props.register();
    });

    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="container-heading">Registration</div>
            <FormTextField name="Name" value={state.name} handleUpdate={handleUpdate}/>
            <label className="checkbox-label">Male?:</label>
            <input type="checkbox" className="checkbox" value={false} onChange={changeMale}/>
            <FormTextField name="Email" value={state.email} handleUpdate={handleUpdate}/>
            <FormTextField name="Username" value={state.username} handleUpdate={handleUpdate}/>
            <FormTextField type="password" name="Password" value={state.password} handleUpdate={handleUpdate}/>
            <FormTextField placeholder="Re-enter your password..." type="password" name="Re-Enter Password" value={state["Re-Enter Password"]} handleUpdate={handleUpdate}/>
            <input className="submit" type="submit" value="submit" />
        </form>
    </div>
)};

export default Container;