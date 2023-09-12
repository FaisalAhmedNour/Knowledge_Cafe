import React, { useEffect, useState } from 'react';
import './Main.css'
import Posts from '../Posts/Posts';
import Nav from '../Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from '../Blogs/Blogs';

const Main = () => {
    const notify = () => toast("You Have Already Bookmarked This Blog");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    let [time, setTime] = useState(0);
    const timeUpdate = (tm) => setTime(time + tm);

    let [item, setItem] = useState([]);

    const addToBookmark = (title) => {
        const isExist = item.find(itm => itm === title)
        if(!isExist) {
            setItem([...item, title]);
        }
        else{
            notify();
            return;
        }
    }

return (
    <div className='main'>
        <div>
            {
                posts.map(post => <Posts timeUpdate={timeUpdate} addToBookmark={addToBookmark} post={post} kye={post.id}></Posts>)
            }
            <br />
            <hr />
            <br />
            <Blogs></Blogs>
        </div>
        <Nav timeUpdate={time} title={item}></Nav>
        <ToastContainer />
    </div>
);
};

export default Main;
