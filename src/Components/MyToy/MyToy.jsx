import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import MyToyTable from './MyToyTable/MyToyTable';

const MyToy = () => {
    const { user } = useContext(AuthContex);
    const [myToy, setMyToy] = useState([]);

    const url = `http://localhost:5000/category?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Category / availableQuantity</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToy.map(singleData=><MyToyTable key={singleData} singleData={singleData}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;