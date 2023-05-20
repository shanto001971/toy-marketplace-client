import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, LogOutUser } = useContext(AuthContex);


    const handelLogOut = () => {
        LogOutUser()
            .then()
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="font-serif" to="/"><li>Home</li></Link>
                        <Link className="font-serif" to="/allToy"><li>All Toy</li></Link>
                        <Link className="font-serif" to="/addtoy"><li>Add A Toy</li></Link>
                        {user?.email ? <Link  className="font-serif" to="/mytoy"><li>My Toy</li></Link>
                            : <></>}
                        <Link className="font-serif" to="/blog"><li>Blogs</li></Link>
                    </ul>
                </div>

                <div className="flex justify-center items-center">
                    <img src="https://seeklogo.com/images/T/toy-story-3-logo-D2E22F3746-seeklogo.com.png" alt="" className="w-10 h-10" />
                    <h1 className="btn btn-ghost normal-case text-2xl">ToY<span className="font-thin m-1">Store</span><span className="text-3xl text-orange-400">3</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-3">
                    <Link className="font-thin" to="/"><li>Home</li></Link>
                    <Link className="font-thin" to="/allToy"><li>All Toy</li></Link>
                    <Link className="font-thin" to="/addtoy"><li>Add A Toy</li></Link>
                    {user?.email ? <Link className="font-thin" to="/mytoy"><li>My Toy</li></Link>
                        : <></>}
                    <Link className="font-thin" to="/"><li>Blogs</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <div className="flex gap-3">
                    <img title={user?.displayName} src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
                    <button className="btn bg-sky-400 hover:bg-sky-500" onClick={handelLogOut}><Link>LogOut</Link></button>

                </div> : <button className="btn bg-orange-300 w-20 hover:bg-orange-400 bg-gradient-to-br"><Link to="/login">Login</Link></button>}

            </div>
        </div>
    );
};

export default Navbar;