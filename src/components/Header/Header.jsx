import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Knowledge Cafe</h1>
            <div className='profile-container'>
                <img src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png" alt="Profile image" />
            </div>
        </div>
    );
};

export default Header;