import React from 'react';
import ApiJobs from './apijobs.jsx';
import Navbar from './navbar.jsx';
import './styles/app.css';

// This is the main page of the React application.
export default function App() {

    return (
        <div id="main">
            <Navbar />
            <div className="container">

                <ApiJobs />
            </div>
        </div>
    )
}