import React from 'react'
import {Header, Company, Footer, Price, Comments, GetFree, Information, Navbar} from './components'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
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
    )
}

export default App

