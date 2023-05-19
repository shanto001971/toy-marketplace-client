import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';

const AllToy = () => {
    const [alltoy, setAlltoy] = useState([]);
    const [search, setSearch] = useState('');
    const [filterToys, setFilterToys] = useState({});
    console.log(filterToys)

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAlltoy(data))
    }, []);




    const handleSearchBtn = (event) => {
        event.preventDefault()
        const productName = event.target.name.value;
        // setSearch(productName);
        const filterData = alltoy.filter(a => a.productName === productName)
        setFilterToys(filterData)
        // const filteredToys = alltoy?.filter((toy) => {
        //     console.log(toy)
        //     toy.toLowerCase().includes(productName.toLowerCase())
        // }
        // );
        // setFilterToys(filteredToys);
    };

    return (
        <div>
            <form onSubmit={handleSearchBtn} className='flex items-center justify-center gap-4 my-6'>
                <input type="text" name="name" placeholder="Toy name" className="input input-bordered w-full max-w-xs" />
                <button type='submit' className='btn btn-outline btn-accent'>Search</button>
            </form>
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
                        {filterToys.length > 0
                            ? filterToys?.map((singleData) => <AllToyRow key={singleData._id} singleData={singleData} />)
                            : alltoy?.slice(0, 20)?.map((singleData) => <AllToyRow key={singleData._id} singleData={singleData} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;