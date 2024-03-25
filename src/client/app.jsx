import React from 'react';
import Navbar from './navbar.jsx';
import Home from './Home.jsx';
import './styles/app.css';

// This is the main page of the React application.
export default function App() {

    return (
        <div id="main">
            <Navbar />
            <div className="container">
                <Home />
            </div>
        </div>
    )
}