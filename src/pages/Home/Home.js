import React from 'react';
import Banner from './Banner';
import HotOffer from './HotOffer';
import Instraction from './Instraction';
import Provide from './Provide';
import Tools from './Tools';

const Home = () => {
    return (     
        <div>
            <Banner></Banner>
            <Provide></Provide>
            <HotOffer></HotOffer>
            <Tools></Tools>
            <Instraction></Instraction>
            
        </div>
    );
};

export default Home;