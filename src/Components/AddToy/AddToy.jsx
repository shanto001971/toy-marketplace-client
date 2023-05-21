import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-hot-toast';


const AddToy = () => {

    const { user } = useContext(AuthContex);
    const [subCategory, setSubCategory] = useState('');


    const handelUpdateProduct = (event) => {
        event.preventDefault()
        const from = event.target;
        const photo = from.photo.value;
        const sellerName = from.sellerName.value;
        const email = from.email.value;
        const productName = from.productName.value;
        // const subCategory = from.subCategory.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const availableQuantity = from.availableQuantity.value;
        const detailDescription = from.detailDescription.value;

        const postToys = {
            photo,
            sellerName,
            email,
            productName,
            subCategory,
            price,
            rating,
            availableQuantity,
            detailDescription
        }
        console.log(postToys)

        fetch('https://toy-story-3-server-shanto001971.vercel.app/postToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postToys)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast("Added Your toy")
                }
            })

    }


    const options = [
        { value: 'Super Cars', label: ' Super Cars' },
        { value: ' Muscle cars', label: 'Muscle cars' },
        { value: 'Exotic cars', label: 'Exotic cars' },
        { value: 'Construction truck', label: 'Construction truck' },
        { value: 'Monster trucks', label: 'Monster trucks' },
        { value: 'Pickup trucks', label: 'Pickup trucks' },
        { value: 'Sedans', label: 'Sedans' },
        { value: 'Hatchbacks', label: 'Hatchbacks' },
        { value: 'Convertibles', label: 'Convertibles' },
    ];

    useEffect(() => {
        document.title = 'ToyStore | AddToy';
    }, []);


    return (
        <div className="">
            <div className="text-center mt-8 mb-10 bg-slate-300 p-10 rounded-md">
                <h1 className='text-4xl'>Add A Toy</h1>
                <p className='text-2xl'>Fillup All Your Toy Information then Post Your Toy!</p>



            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handelUpdateProduct} className="card-body">
                        <div className="lg:flex gap-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Picture URL of the toy</span>
                                </label>
                                <input type="text" name="photo" placeholder="Picture URL of the toy" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">seller name</span>
                                </label>
                                <input type="text" name="sellerName" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full"/>
                            </div>

                        </div>
                        <div className="lg:flex gap-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="" defaultValue={user?.email} className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name="productName" placeholder="Name" className="input input-bordered w-full" required/>
                            </div>

                        </div>

                        <div className="lg:flex gap-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <div className='border p-3 rounded-md'>
                                    <select
                                        value={subCategory}
                                        onChange={(e) => setSubCategory(e.target.value)}
                                    >
                                        <option value="">Select an Category</option>
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required/>
                            </div>

                        </div>
                        <div className="lg:flex gap-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="text" name="availableQuantity" placeholder="Available quantity" className="input input-bordered w-full" required/>
                            </div>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <input type="text" name="detailDescription" placeholder="Detail description" className="input input-bordered w-full" />
                        </div>


                        <div className="form-control mt-6">
                            <button type='submit' className="px-6 py-2 mx-auto text-blue-100 rounded bg-gradient-to-r from-blue-600 to-blue-400 w-full">Add Toy</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddToy;