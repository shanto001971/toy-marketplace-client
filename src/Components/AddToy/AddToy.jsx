import React from 'react';
import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";


const AddToy = () => {

    const {user}=useContext(AuthContex);

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="lg:flex gap-5">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Picture URL of the toy</span>
                            </label>
                            <input type="text" placeholder="Picture URL of the toy" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">seller name</span>
                            </label>
                            <input type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="lg:flex gap-5">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="" defaultValue={user?.email} className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="lg:flex gap-5">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" placeholder="Sub-category" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="lg:flex gap-5">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" placeholder="Available quantity" className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" placeholder="Detail description" className="input input-bordered w-full" />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddToy;