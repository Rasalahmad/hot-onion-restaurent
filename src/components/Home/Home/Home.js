import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Meals from '../Meals/Meals/Meals';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Meals></Meals>
            <Footer></Footer>
        </div>
    );
};

export default Home;