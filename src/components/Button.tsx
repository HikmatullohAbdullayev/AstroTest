import React from 'react';

function Button({ primary, secondary, link }) {
    return (
        <button className={`  rounded-[45px]  ${primary ? "bg-orange-600" : ""} ${secondary ? "bg-white hover:bg-black  hover:text-white" : ""}`}>
            <a className={`font-semibold text-xl py-4 px-8 rounded-[45px] border-[3px] border-solid border-black inline-block ${primary ? "text-white" : ""} ${secondary ? "text-black hover:text-white " : ""}`} href={link}> <span className="px-2 font-extrabold">+</span>Learn more about apps</a>
        </button>
    );
}

export default Button;
