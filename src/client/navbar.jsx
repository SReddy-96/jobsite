import React from 'react';

// Simple Navbar to display at the top of the page with the use of Bootstrap.
function Navbar() {
    return (
        <ul className="nav justify-content-center mb-4 border-bottom sticky-top" style={{ backgroundColor: 'rgb(38, 70, 83)' }}>
            <li className="nav-item">
                <span className="h1 mb-0 fs-1" style={{ color: 'white' }}>Job Site</span>
            </li>
        </ul>
    )
}

export default Navbar;