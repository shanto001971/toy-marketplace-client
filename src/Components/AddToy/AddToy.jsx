import React from 'react';
import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";


const AddToy = () => {

    const { user } = useContext(AuthContex);

    const handelUpdateProduct = (event) => {
        event.preventDefault()
        const from = event.target;
        const photo = from.photo.value;
        const sellerName = from.sellerName.value;
        const email = from.email.value;
        const productName = from.productName.value;
        const subCategory = from.subCategory.value;
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

        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postToys)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

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
                                <input type="text" name="photo" placeholder="Picture URL of the toy" className="input input-bordered w-full" />
                            </div>
    
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">seller name</span>
                                </label>
                                <input type="text" name="sellerName" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
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
                                <input type="text" name="productName" placeholder="Name" className="input input-bordered w-full" />
                            </div>
    
                        </div>

                        <div className="lg:flex gap-5">
    
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" name="subCategory" placeholder="Sub-category" className="input input-bordered w-full" />
                            </div>
    
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="text" name="availableQuantity" placeholder="Available quantity" className="input input-bordered w-full" />
                            </div>
    
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <input type="text" name="detailDescription" placeholder="Detail description" className="input input-bordered w-full" />
                        </div>
    
    
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Toy</button>
                        </div>
                    </form>
                </div>
    
            </div>
        </div>
    );
};

export default AddToy;