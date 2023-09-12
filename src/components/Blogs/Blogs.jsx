import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>QNA:</h1>
            <article>
                <h3>Props vs state</h3>
                <p>
                    props and state are both used to manage data and share information between components. Props are a way to pass data from a parent component to a child component. Props are read-only. State, on the other hand, is a way to manage data within a component. State is can be updated and modified. It is used to store information that changes over time.
                </p>
            </article>
            <article>
                <h3>How does useState work?</h3>
                <p>
                    First, To use useState, we need to import it from the React library. Then declare the state variable using the useState Hook. It will return an array with two element: the current state value and a function that can be used to update the state. We can now use the state variable in our component to render dynamic content.
                </p>
            </article>
            <article>
                <h3>How Does React work?</h3>
                <p>
                    In React, we build our UI out of components. To update the state of a component, React uses virtual DOM to compute the minimum number of changes needed to update the UI. React compares the new virtual DOM tree to the previous virtual DOM tree using a diffing algorithm. We can define event handlers as methods on our components and attach them to the DOM elements using React props.
                </p>
            </article>
        </div>
    );
};

export default Blogs;