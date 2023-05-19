import React from 'react';

const UpdateProduct = () => {
    return (
        <div className="">
            <div className="text-center mt-8  bg-slate-300 p-10 rounded-md">
                <h1 className='text-4xl'>Add A Toy</h1>
                <p className='text-2xl'>Fillup All Your Toy Information then Post Your Toy!</p>
            </div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-1/2">
                    <form className="card-body">

                        <div className="lg:flex gap-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
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
                            <button type='submit' className="btn bg-indigo-400">Update Product</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateProduct;