import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContex } from '../../../AuthProvider/AuthProvider';
import StarRatings from 'react-star-ratings';
import { toast } from 'react-hot-toast';

const ToyCard = ({ toyInfo }) => {
    const { user } = useContext(AuthContex)
   
    const handleButton=(user) =>{
        if (!user) {
            toast('Login fast')
        }
    }
   

    return (
        <div className="card h-96 glass">
            <figure><img src={toyInfo.photo} alt="car!" className='h-50' /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyInfo?.productName}</h2>

                <p className='text-left'>Price: ${toyInfo?.price}</p>
                <p className='text-left'>
                <StarRatings
                    rating={toyInfo?.rating}
                    starRatedColor="orange"
                    starDimension="20px"
                    starSpacing="2px"   
                />
                </p>
                <div className="card-actions justify-end">
                <Link to={`/alltoys/${toyInfo._id}`}><button onClick={()=>handleButton(user)} className="px-6 py-2 mx-auto text-blue-100 rounded bg-gradient-to-r from-blue-600 to-blue-400 mt-5 flex justify-center items-center gap-5">View Details button</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;