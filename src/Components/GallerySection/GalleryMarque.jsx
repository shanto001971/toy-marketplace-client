import React from 'react';
import Marquee from "react-fast-marquee";

const GalleryMarque = () => {
    return (
        <div className='mt-10'>
           <Marquee>
            <img src="https://m.media-amazon.com/images/I/71iCICbcAPS._AC_SL1500_.jpg" alt="" className=' ml-5 w-96 mr-20'/>
            <img src="https://static-01.daraz.com.bd/p/49646e894a587e42aa86ea0340ba80ec.jpg_720x720.jpg_.webp" alt="" className='w-96 mr-20'/>
            <img src="https://m.media-amazon.com/images/I/71-eusjz1TL._AC_SL1500_.jpg" alt="" className='w-96 mr-20'/>
            <img src="https://www.lankakade.co.uk/images/products/large/546.jpg" alt="" className='w-96 mr-20'/>
            <img src="https://m.media-amazon.com/images/I/81FjGnA4AzL.jpg" alt="" className='w-96 mr-20'/>
           </Marquee>
        </div>
    );
};

export default GalleryMarque;