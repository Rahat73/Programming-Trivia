import React from 'react';
import Option from '../Options/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ question }) => {

    const handleOption = (option) => {
        if (option === question.correctAnswer) {
            toast("Your anser is correct !!");
        }
        else {
            toast("Wrong answer.. Try Again");
        }
    }

    const revealAns = (answer) => {
        toast(answer);
    }
    return (
        <div className='my-5'>
            <ToastContainer />
            <div className='text-white card glass'>
                <div>
                    <h1 className='my-5 font-semibold text-xl'>Question: <span>{question.question}</span></h1>
                    <div className="flex justify-end mr-3">
                        <button onClick={() => revealAns(question.correctAnswer)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg></button>
                    </div>
                </div>
                <div className="w-4/6 mx-auto my-5 grid lg:grid-cols-2 gap-5">
                    {
                        question.options.map(option => <Option key={option} option={option} handleOption={handleOption}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;