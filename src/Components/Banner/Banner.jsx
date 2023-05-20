import React from 'react';

const Banner = () => {
    return (
        <div className="my-20">
            <div className="t border p-5">
                <h1 className='text-4xl font-serif'>Baby Toy Car New Collection</h1>
                
                <p className='text-2xl mt-3'>Every New Toy collection is Available Hare</p>
            </div>
            <div className='mt-10 p-7 lg:flex gap-10'>
            <div data-aos="fade-right" className="lg:w-1/2">
                <img src="https://solaroidenergy.com/wp-content/uploads/2023/03/how-much-is-baby-toy-car.jpg" alt="" className='h-96'/>
            </div>
            <div data-aos="fade-left" className=" flex justify-center items-center lg:w-1/2">
                <div className="text-center lg:text-start mt-8 lg:mt-0">
                <h1 className='text-2xl'>How Much is Baby Toy Car</h1>
                <p>$5,580.84 NGN <span className='text-lime-500'> In stock</span> Brand: Solaroid Energy</p>
                <small>Baby Toy Car is a cute toy that is made of durable plastic and features a soft, cuddly body. It's the perfect size for little hands to grasp, and it ...</small>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;