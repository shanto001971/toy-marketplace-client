import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";


const Ragister = () => {
    const { createUser, profileUpgrade,setUser } = useContext(AuthContex);


    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
        createUser(email, password)
            .then((result) => {
                UpdateUserProfile(name,photo)
                setUser(result.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const UpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        profileUpgrade(profile)
            .then(() => { })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handelRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-300 hover:bg-orange-400">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Ragister;