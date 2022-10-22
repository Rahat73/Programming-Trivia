import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import image from '../../../src/7167569.jpg'
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const topics = useLoaderData().data;

    return (
        <div className='w w-4/5 mx-auto my-14'>
            <img src={image} alt="" />
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                {
                    topics.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;