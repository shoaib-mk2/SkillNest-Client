import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // verifying if the password length is 6 or more
        if (password.length < 6) {
            return toast('Your password is less than 6 characters', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "error"
            });
        }

        // verifying if the password have any capital letters
        else if (!/[A-Z]/.test(password)) {
            return toast('Your password do not have a capital letter', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "error"
            });
        }

        // verifying if the password have any special characters
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return toast("Your password don't have any special characters", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "error"
            });
        }

        // create user in firebase
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name
                })
                    .then(() => console.log('profile updated'))
                    .catch((error) => console.log(error))
                console.log(result.user);
                e.target.reset(); // reset form values after successfully created a user
                navigate("/"); // redirect user to home page after successful registration
            })
            .catch(error => {
                console.error(error);
                toast(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10">Register for free</h1>
                    <p>Create new account today !!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-base text-white hover:text-black bg-lime-600">Register</button>
                        </div>
                    </form>
                </div>
                <p className="px-8 pb-4">Already have account? Please <Link className="font-bold text-lime-600" to="/login">Login</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;