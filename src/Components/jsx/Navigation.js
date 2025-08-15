import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
return (
    <nav className='navigation'>
        <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/activities">Activities</Link></li>
        </ul>
    </nav>
)
}

export default Navigation