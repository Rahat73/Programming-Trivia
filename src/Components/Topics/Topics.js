import React from 'react';

const Topics = ({ topic }) => {
    return (
        <div>
            <div className="card glass transition ease-in-out hover:scale-110 my-10">
                <figure><img className='transition ease-in-out hover:scale-110' src={topic.logo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{topic.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Start quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;