import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1 className='title'>This Meal DB</h1>
            <nav>
                <a href="">Home</a>
                <a href="">API</a>
                <a href="">About</a>
                <a href="">Forum</a>
            </nav>
        </div>
    );
};

export default Header;