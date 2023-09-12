import React, { useState } from 'react';
import './Nav.css'

const Nav = (props) => {

    console.log(props);

    const updateTime = props.timeUpdate;
    const titles = props.title;

    return (
        <nav className='nav'>
            <div>
                <h2>Spent time on read : {updateTime} min</h2>
            </div>
            <br />
            <div className='bookmarked-titles'>
                <h2>Bookmarked Blogs : {titles.length}</h2>
                <div className='bookmarks'>
                    {
                        titles.map(title => <h3>{title}</h3>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;