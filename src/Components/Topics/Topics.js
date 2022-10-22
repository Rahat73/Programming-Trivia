import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="card glass transition ease-in-out hover:scale-110 my-10">
                <figure><img className='transition ease-in-out hover:scale-110' src={topic.logo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{topic.name}</h2>
                    <p>Total questions: {topic.total}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/quiz/${topic.id}`} className="btn btn-primary">Start quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;