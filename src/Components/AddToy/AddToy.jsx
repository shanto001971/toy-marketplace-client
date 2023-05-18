import React from 'react';

const AddToy = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="lg:flex gap-5">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered w-full" />
                        </div>

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