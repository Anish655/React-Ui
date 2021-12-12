import React, { useEffect } from 'react';
import {Header, Company, Footer, Price, Comments, GetFree, Information, Navbar} from '../components'
import Rectangle15 from '../assets/Rectangle15.png';
const Contact = () => {
    useEffect(() => {
        document.title = 'My Contact';
    });
    return (
        <div>
            <Navbar/>
            <Header/>


            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src={Rectangle15} class="mx-auto d-block" alt="..."/>
                    </div>
                    <div class="col-sm">
                        <h2 class="contact_head">Contact Us</h2>
                        <h4>Questions, bug reports, feedback.</h4>
                    <form class="p-4">
                        <div class="form-group">
                            <label for="exampleDropdownFormEmail2">Your mail</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleDropdownFormPassword2">Tell us what you need help with:</label>
                            <textarea class="form-control" id="exampleDropdownFormPassword2" placeholder="Enter a topic"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary float-right">Send now</button>
                    </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};
export default Contact;