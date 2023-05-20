import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetlis = () => {
    const data = useLoaderData()
    

    const { photo, subCategory, price, availableQuantity, productName } = data
    return (
        <div className="overflow-x-auto w-full my-40">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
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
                        </td>
                        <td>${price}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ViewDetlis;