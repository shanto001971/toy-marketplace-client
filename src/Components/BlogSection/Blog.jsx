import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = 'ToyStore | Blog';
    }, []);
    return (
        <div>
            <h1>hello this is blog section</h1>
        </div>
    );
};

export default Blog;