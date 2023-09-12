import React from 'react';
import './Posts.css'

const Posts = (props) => {
    const {pictures, author, published, time, title} = props.post;
    const timeUpdate = props.timeUpdate;
    const addToBookmark = props.addToBookmark;
    return (
        <div>
            <div>
                <img className='cover-img' src={pictures[0].cover} alt="" />
                <div className='info'>
                    <div className='profile'>
                        <div className='profile-img'>
                            <img src={pictures[0].profile} />
                        </div>
                        <div className='author-info'>
                            <h3>{author}</h3>
                            <p>{published}</p>
                        </div>
                    </div>
                    <div className='reading-time'>
                        <p>{time} min read</p><i onClick={() => addToBookmark(title)} class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <h1 className='title'>{title}</h1>
                <p onClick={() => timeUpdate(time)} className='read-btn'>Mark as read</p>
            </div>
        </div>
    );
};

export default Posts;