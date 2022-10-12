import React from 'react';



const Option = ({ option, handleOption }) => {
    return (
        <div>
            <button className="btn glass" onClick={() => handleOption(option)}>
                <h2>{option}</h2>
            </button>
        </div>
    );
};

export default Option;