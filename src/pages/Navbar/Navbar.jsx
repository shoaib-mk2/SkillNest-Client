import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { MdLogout } from "react-icons/md";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-l-2 border-lime-600 font-bold text-lime-600" : "font-bold "
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addJob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-l-2 border-lime-600 font-bold text-lime-600" : "font-bold "
                }>
                Add Job
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myPostedJobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-l-2 border-lime-600 font-bold text-lime-600" : "font-bold "
                }>
                My Posted Jobs
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myBids"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-l-2 border-lime-600 font-bold text-lime-600" : "font-bold "
                }>
                My Bids
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/bidRequests"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-l-2 border-lime-600 font-bold text-lime-600" : "font-bold "
                }>
                Bid Requests
            </NavLink>
        </li>
    </>

    return (
        <div className="bg-black text-white">
            <div className="navbar md:w-4/5 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navLinks}
                        </ul>
                    </div>

                    <NavLink to="/" className="text-2xl md:text-4xl font-extrabold flex items-center"><img className="w-12 mr-2" src="/logo.png" alt="" />SkillNest</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-lime-600">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user?.photoURL : "./user-default-pic.svg"} alt="User Profile" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content border-2 bg-lime-600 font-bold rounded-box w-52">
                                    <li className="border rounded-lg">
                                        <a className="justify-between">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li className="border rounded-lg"><a onClick={handleLogOut}>Logout<MdLogout></MdLogout></a></li>
                                </ul>
                            </div>
                            :
                            <Link className="btn btn-sm md:btn-md font-bold shadow-md shadow-lime-600" to="/login">
                                Log In / Sign Up
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;