import React from 'react';

function CommonInput({ label, name, id, type, placeholder, value, onChange }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default CommonInput;
