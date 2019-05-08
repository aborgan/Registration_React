import React, {useState, useCallback} from 'react';
import '../css/registration.css';

const Container = props => {
    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    const [password2, updatePassword2] = useState("");
    const handleSubmit = useCallback(e => {
        e.preventDefault();
        if(password !== password2)
            console.log("passwords don't match!");
        else
            console.log(name, email, username, password);
    });

    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="container-heading">Registration</div>
            <div>
                <label>Name:</label>
                <input 
                    type="text"
                    value={name}
                    placeholder="Enter your name..."
                    onChange={e => updateName(e.target.value)}
                />
            </div>
            
            <div>
                <label>Email:</label>
                <input 
                    type="text"
                    value={email}
                    placeholder="Enter your email..."
                    onChange={e => updateEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Username:</label>
                <input 
                    type="text"
                    value={username}
                    placeholder="Enter a username..."
                    onChange={e => updateUsername(e.target.value)}
                />
            </div>

            <div>
                <label>Password:</label>
                <input 
                    type="password"
                    value={password}
                    placeholder="Enter your Password..."
                    onChange={e => updatePassword(e.target.value)}
                />
            </div>

            <div>
                <label>Re-enter Password:</label>
                <input 
                    type="password"
                    value={password2}
                    placeholder="Re-enter your Password..."
                    onChange={e => updatePassword2(e.target.value)}
                />
            </div>
            <input className="submit" type="submit" value="submit" />
        </form>
    </div>
)};

export default Container;