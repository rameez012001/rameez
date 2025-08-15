import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default function Header(props) {
    
    return (
        <header id='header'>
            <div className='header-content'>
                <h1 id='name'><Link to={"/"}>Rameez Hameed</Link></h1>
                <a id="twitter-btn"  title="Follow @i__rameez on X" href="https://x.com/i__rameez"><i id="logo"></i><span class="label" id="l">Follow @i__rameez</span></a>
            </div>
            <Navigation />
        </header>
    );
}
