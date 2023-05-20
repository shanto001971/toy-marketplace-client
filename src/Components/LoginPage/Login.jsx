import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";



const Login = () => {
    const { setUser, LoginUser, loginWithGoogle } = useContext(AuthContex);
    const [error, setError] = useState();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handelForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        LoginUser(email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
                form.reset()
                toast('Login successfully')
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError(err)
            })
    }

    const handelGoogleLogIn = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user)
                toast('Login successfully')
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return (
        <div className="hero  lg:min-h-screen bg-base-200">
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
                        <button className="btn bg-orange-300 hover:bg-orange-400">Login</button>
                    </div>
                    <p>New to <Link className="link" to="/register">Ragister</Link></p>
                    <div className="mx-auto h-10"><button onClick={handelGoogleLogIn} className=""><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="w-10 h-10" /></button>

                    </div>
                </div>
            </form>



        </div>
    );
};

export default Login;