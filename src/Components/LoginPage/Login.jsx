import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const { createUser,setUser } = useContext(AuthContex);
    const handelForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        LoginUser(email,password)
        .then((result)=>{
            setUser(result.user)
        })
        .catch((err)=>{
            console.log(err)
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
                        <input type="text" name="password" placeholder="password" className="input input-bordered" />
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