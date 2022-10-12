import React from 'react';

const Blog = () => {
    return (
        <div className='w w-4/5 mx-auto my-14 text-start'>
            <div>
                <h1 className='text-2xl font-semibold my-3'>What is the purpose of the react router?</h1>
                <p className='px-3'>-- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-3'>How does Context API work?</h1>
                <p className='px-3'>-- The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-3'>What is the purpose of the react router?</h1>
                <p className='px-3'>-- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
        </div>
    );
};

export default Blog;