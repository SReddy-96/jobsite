import React from 'react';

// Simple Navbar to display at the top of the page with the use of Bootstrap.
function Navbar() {
    return (
        <ul className="nav bg-body-tertiary justify-content-center mb-4">
            <li className="nav-item">
                <span className="h1 mb-0 fs-1">Job Site</span>
            </li>
        </ul>
    )
}

export default Navbar;