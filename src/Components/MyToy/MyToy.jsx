import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import MyToyTable from './MyToyTable/MyToyTable';
import { toast } from 'react-hot-toast';

const MyToy = () => {
    const { user } = useContext(AuthContex);
    const [myToy, setMyToy] = useState([]);
    const [lod, setLod] = useState(false);

    const url = `http://localhost:5000/toys/my?email=${user?.email}`;

    console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [lod])

    const handleRemove = id => {

        fetch(`http://localhost:5000/toys/my/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    if (data.acknowledged=== true) {
                        setLod(true)
                    }
                    return toast('DELETE Successfuly')
                    

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
                            
                            <th>Edit</th>
                            <th>Category / availableQuantity</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToy.map(singleData => <MyToyTable key={singleData._id} singleData={singleData} handleRemove={handleRemove} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;