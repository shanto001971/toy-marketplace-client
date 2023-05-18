import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";
import { useState } from "react";


const Login = () => {
    const { createUser, setUser, LoginUser } = useContext(AuthContex);
    const [error, setError] = useState();
    const handelForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        LoginUser(email, password)
            .then((result) => {
                setUser(result.user)
                form.reset()
            })
            .catch((err) => {
                setError(err)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handelForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="Password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;