import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetlis = () => {
    const data = useLoaderData()
    console.log(data)

    const { photo, subCategory, price, availableQuantity, productName } = data
    return (
        <div className="overflow-x-auto w-full my-40">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category / AvailableQuantity / Rating / Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-40 h-40">
                                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{subCategory}</div>
                                    <div className="text-sm opacity-50">{data?.sellerName}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {productName}
                            <br />
                            <span className="badge badge-ghost badge-sm">AvailableQuantity: {availableQuantity}</span>
                            <span className="badge badge-ghost badge-sm">Rating: {data?.rating}</span>
                            <br />
                            <span className="badge badge-ghost badge-sm">Description: {data?.detailDescription}</span>
                            
                        </td>
                        <td>${price}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ViewDetlis;