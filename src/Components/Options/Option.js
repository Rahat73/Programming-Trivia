import React from 'react';
import { ToastContainer } from 'react-toastify';

const Option = ({ option, handleOption }) => {
    return (
        <div>
            <button className="btn glass" onClick={() => handleOption(option)}>
                <h2>{option}</h2>
            </button>
            <ToastContainer />
        </div>
    );
};

export default Option;