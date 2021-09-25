import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>Hire Your Investor</h1>
            </div>
            <div className="nav">
                <a href="/home">Home</a>
                <a href="/gallery">Investors</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Header;