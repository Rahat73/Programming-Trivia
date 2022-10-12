import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const questions = useLoaderData().data;
    console.log(questions)
    return (
        <div className='w w-4/5 mx-auto my-14'>
            <h1 className='font-bold text-2xl'>Quiz of {questions.name}</h1>
            {
                questions.questions.map(question => <Question key={question.id} question={question}></Question>)
            }
        </div>
    );
};

export default Quiz;