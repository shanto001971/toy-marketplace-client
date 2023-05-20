import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NumberThreeBanner = () => {
    return (
        <div className="">
            <div className="my-10 border p-10 text-center">
                <h1 className='text-4xl font-serif'>Driving Imagination</h1>
                <p className='font-thin'>Exploring the Fascinating Universe of Toy Sports Cars</p>
            </div>
            <div className='my-20  lg:flex justify-between'>
            <div className="w-full p-10 ">
               <h1 className='font-serif text-4xl mb-5'>Zooming into Fun: Exploring the World of Toy Sports Cars</h1>
               <p className='font-thin'>Unleashing Speed and Excitement: The Top 10 Toy Sports Cars for Racing Enthusiasts</p>
               <small className='font-thin'>The Need for Toy Speed: Discovering the Best Toy Sports Cars for Kids</small>
               <small className='font-thin'>From Track to Living Room: Unleashing the Power of Toy Sports Cars</small>
            </div>
            <div className="p-10 w-1/2 h-60 bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://s.alicdn.com/@sc04/kf/Hf7b522a8340c4f77910a23640988fe13e.jpg_300x300.jpg")`
                }}>
                <div className="">
                    <h1 className='font-serif text-3xl'>This Week Best Collation Hare </h1>
                    <p className='text-xl font-thin'>You can Buy Any product After 2023 UpTo 50% Less</p>
                    <button className='px-6 py-2 text-blue-100 rounded bg-gradient-to-r from-blue-600 to-blue-400 mt-5 flex justify-center items-center gap-5'>Explore <FaArrowLeft/></button>

                </div>
            </div>
        </div>
        </div>
    );
};

export default NumberThreeBanner;