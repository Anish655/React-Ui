import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Pricing from './pricing';
import Contact from './contact';
const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path = "/about" element={<About/>} />
                <Route path = "/pricing" element={<Pricing/>} />
                <Route path = "/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
};
export default Webpages;