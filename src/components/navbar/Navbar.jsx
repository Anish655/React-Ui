import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
       <div className="ui__navbar">
           <nav class="navbar navbar-expand-lg navbar-light bg-white">
             <a class="navbar-brand" href="#">
                 <img src={logo} alt="logo" />
             </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                    </div>
                </div>
            </nav>
       </div>
    )
}

export default Navbar
