import React from 'react';
import Option from '../Options/Option';
import { ToastContainer, toast } from 'react-toastify';

const Question = ({ question }) => {

    const handleOption = (option) => {
        if (option === question.correctAnswer) {
            toast("Your anser is correct !!");
        }
        else {
            toast("Wrong answer.. Try Again");
        }
    }

    return (
        <div className='my-5'>
            <div className='text-white card glass'>
                <h1 className='my-5 font-semibold text-xl'>Question: <span>{question.question}</span></h1>
                <div className="w-4/6 mx-auto my-5 grid grid-cols-2 gap-5">
                    {
                        question.options.map(option => <Option key={option} option={option} handleOption={handleOption}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;