import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = 'ToyStore | Blog';
    }, []);
    return (
        <div className='p-10'>
            <div className="my-20">
                <h1>1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <hr />
                <h1>1 : What is an access token?</h1>
                <p>Access tokens are used in token-based authentication to allow an application to access an API.</p>

                <h1>2:What is an refresh token?</h1>
                <p>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.</p>

                <h1>3:Storage on the Client-side:</h1>
                <p>The storage location for access tokens and refresh tokens on the client-side depends on various factors, including security requirements and the type of client (e.g., browser-based web application, mobile application). </p>

            </div>
            <div className="my-20">
            <h1>1:Compare SQL and NoSQL databases?</h1>
            <hr />

            <h1>1:SQL Databases:</h1>
            <p>Structure: SQL databases are based on a structured data model, often represented as tables with rows and columns. The data schema is predefined, and data is stored in a structured manner with relationships between tables defined by foreign keys.</p>

            <h1>2:NoSQL Databases:</h1>
            <p>Structure: NoSQL databases are schema-less or have a flexible schema, allowing for dynamic and unstructured data. The data is often stored in key-value pairs, documents, wide-column stores, or graph structures.</p>

            </div>


            <div className="my-20">
            <h1>1:What is express js? What is Nest JS</h1>
            <hr />

            <h1>1:What is express js?</h1>
            <p>is a popular web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features and middleware that allow developers to handle routing, handle HTTP requests and responses, manage sessions, and more. </p>

            <h1>2: What is Nest JS ?</h1>
            <p>NestJS is a progressive and opinionated Node.js framework for building scalable and efficient server-side applications.</p>
            </div>

            <div className="my-20">
            <h1>1:What is MongoDB aggregate and how does it work?</h1>
            <hr />
            <p>1:MongoDB's aggregate is a powerful feature that allows you to perform advanced data processing and analysis operations on collections of documents.</p>
            </div>

        </div>
    );
};

export default Blog;