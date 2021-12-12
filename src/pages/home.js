import React from 'react';
import {Header, Company, Footer, Price, Comments, GetFree, Information, Navbar} from '../components'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Company/>
            <Price/>
            <Comments/>
            <Information/>
            <GetFree/>
            <Footer/>
        </div>
        
    );
};
export default Home;