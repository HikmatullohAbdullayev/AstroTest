import React from 'react';

function Button({ primary, secondary, link }) {
    return (
        <button className={`py-4 px-8  ${primary ? "bg-orange-600" : ""} ${secondary ? "bg-white" : ""}`}>
            <a className={`font-semibold ${primary ? "text-white" : ""} ${secondary ? "text-black" : ""}`} href={link}> <span>+</span>Learn more about apps</a>
        </button>
    );
}

export default Button;
