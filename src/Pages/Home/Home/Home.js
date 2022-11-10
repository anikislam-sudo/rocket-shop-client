import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner';
import Service from '../Service/Service';

const Home = () => {
    useTitle("Home");
    return (
        <div>
           <Banner></Banner>
           <Service></Service>
        </div>
    );
};

export default Home;