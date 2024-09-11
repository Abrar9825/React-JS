import React from 'react';

function CommonInput({ type, name, placeholder, value, onChange, className }) {
    return (
        <input
            type={type || "text"}
            placeholder={placeholder || 'Enter Value'}
            value={value}
            onChange={onChange}
            name={name}
            className={className || 'w-full block px-5 py-2 mt-2 text-black border rounded-lg'}
        />
    );
}

export default CommonInput;
