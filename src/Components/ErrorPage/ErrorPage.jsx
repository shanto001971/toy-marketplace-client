import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center my-10'>
            <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1684579732~exp=1684580332~hmac=6793a8bc7f0ee44cff42227fc13b92694248596c4e591a2a44efbc0486b2f99d" alt="" className='mx-auto' />
            <h1 className='text-4xl font-serif'>PAGE NOT FOUND!</h1>
            <p className='text-2xl font-serif'>Surely, we have come a long way since then</p>
                <Link to="/"><button className='px-6 py-2 mx-auto text-blue-100 rounded bg-gradient-to-r from-blue-600 to-blue-400 mt-5 flex justify-center items-center gap-5'>HOME <FaArrowLeft/></button></Link>
        </div>
    );
};

export default ErrorPage;