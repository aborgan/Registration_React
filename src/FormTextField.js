import React from 'react';

const FormTextField = props => {
    const name = props.name
    const handleUpdate = props.handleUpdate;
    const type = props.type ? props.type : "text";
    const placeHolder = props.placeholder ? props.placeholder : "Enter your " + name.toString().toLowerCase() + "..."
    return (
        <div>
            <label>{name}:</label>
            <input
                className="textfield"
                type={type}
                placeholder={placeHolder}
                onChange={e => {e.persist(); handleUpdate({type:name.toString().toLowerCase(), e: e})}}
            />
        </div>
)};

export default FormTextField;