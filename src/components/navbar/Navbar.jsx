import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
       <div className="ui__navbar container-fluid px-5">
           <nav class="navbar navbar-expand-lg navbar-light bg-white">
             <a class="navbar-brand ui__navbar-logo" href="#">
                 <img src={logo} alt="logo" />
             </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
                        <a class="nav-link" href="#">About Us</a>
                        <a class="nav-link" href="#">Contact</a>
                        <a class="nav-link active text-primary">Login</a>
                        <button type="button" class="btn btn-primary signUpBtn">Sign Up</button>
                    </div>
                </div>
            </nav>
       </div>
    )
}

export default Navbar
