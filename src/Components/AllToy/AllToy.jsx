import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';

const AllToy = () => {
    const [alltoy, setAlltoy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setAlltoy(data))
    }, []);
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
                            alltoy?.slice(0, 20)?.map(singleData=><AllToyRow key={singleData._id} singleData={singleData}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;