import React from 'react';
import { Link } from "react-router-dom";
import { FaPen, FaPenAlt, FaTrashAlt } from 'react-icons/fa';

const MyToyTable = ({ singleData, handleRemove }) => {
    const { sellerName, productName, subCategory, price, availableQuantity, photo, _id } = singleData;
    console.log(singleData)
    return (
        <tr>

            <th>
                <label className=''>
                    <Link to='/update/:id' className='mb-10'><FaPen /></Link>
                </label>
                <br />
                <label className=''>
                    <button onClick={() => handleRemove(_id)}> <FaTrashAlt></FaTrashAlt></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-40 h-40">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {subCategory}
                <br />
                <span className="badge badge-ghost badge-sm">availableQuantity : {availableQuantity}</span>
            </td>
            <td>$ {price}</td>
            <th>
                <button className="btn btn-ghost btn-xs hover:bg-lime-600">details</button>
            </th>
        </tr>
    );
};

export default MyToyTable;