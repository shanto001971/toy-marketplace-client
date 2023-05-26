import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import MyToyTable from './MyToyTable/MyToyTable';
import Swal from "sweetalert2";
import { toast } from 'react-hot-toast';

const MyToy = () => {
    const { user } = useContext(AuthContex);
    const [myToy, setMyToy] = useState([]);
    const [lod, setLod] = useState(false);

    const url = `https://toy-story-3-server-shanto001971.vercel.app/toys/my?email=${user?.email}`;

    // console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [lod])

    const handleRemove = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete your toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-story-3-server-shanto001971.vercel.app/toys/my/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setLod(true)
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'

                            )

                            const remaining = myToy.filter(cof => cof._id !== _id);
                            setMyToy(remaining);
                        }
                    })

            }
        })
    }

    //     fetch(`https://toy-story-3-server-shanto001971.vercel.app/toys/my/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //             if (data.deletedCount > 0) {
    //                 if (data.acknowledged=== true) {
    //                     setLod(true)
    //                 }
    //                 return toast('DELETE Successfuly')


    //             }
    //         })
    // }


    useEffect(() => {
        document.title = 'ToyStore | MyToy';
    }, []);


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