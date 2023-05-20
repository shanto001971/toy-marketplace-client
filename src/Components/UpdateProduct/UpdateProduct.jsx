import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {

    const data = useLoaderData()
    const { _id, price, availableQuantity, detailDescription } = data
    console.log(data)

    const handelUpdateData = (event) => {
        event.preventDefault()
        const from = event.target;
        const price = from.price.value;
        const availableQuantity = from.availableQuantity.value;
        const detailDescription = from.detailDescription.value;

        const update = {
            price,
            availableQuantity,
            detailDescription
        }
        console.log(update)

        fetch(`http://localhost:5000/alltoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast('update Successfully')
                }
            })


    }




    return (
        <div className="">
            <div className="text-center mt-8  bg-slate-300 p-10 rounded-md">
                <h1 className='text-4xl'>Update A Toy</h1>
                <p className='text-2xl'>Fillup All Your Toy Information then Update Your Toy!</p>
            </div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-1/2">
                    <form onSubmit={handelUpdateData} className="card-body">

                        <div className="lg:flex gap-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="text" name="availableQuantity" defaultValue={availableQuantity} placeholder="Available quantity" className="input input-bordered w-full" />
                            </div>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <input type="text" name="detailDescription" defaultValue={detailDescription} placeholder="Detail description" className="input input-bordered w-full" />
                        </div>


                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-indigo-400">Update Toy</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default UpdateProduct;