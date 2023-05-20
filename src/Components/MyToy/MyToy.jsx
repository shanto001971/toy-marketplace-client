import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import MyToyTable from './MyToyTable/MyToyTable';

const MyToy = () => {
    const { user } = useContext(AuthContex);
    const [myToy, setMyToy] = useState([]);
    console.log(user.email)
    console.log(myToy)

    const url = `http://localhost:5000/toys/my?email=${user?.email}`;

    console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [url])

    const handleRemove = id => {

        fetch(`http://localhost:5000/toys/my/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alart('deleted')
                    
                }
            })
    }



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
                            myToy.map(singleData => <MyToyTable key={singleData._id} singleData={singleData} handleRemove={handleRemove}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;