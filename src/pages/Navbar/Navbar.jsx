import { Link, NavLink } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ff7700] font-bold text-lime-600" : "font-bold "
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addJob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ff7700] font-bold text-lime-600" : "font-bold "
                }>
                Add Job
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myPostedJobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ff7700] font-bold text-lime-600" : "font-bold "
                }>
                My Posted Jobs
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myBids"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ff7700] font-bold text-lime-600" : "font-bold "
                }>
                My Bids
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/bidRequests"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ff7700] font-bold text-lime-600" : "font-bold "
                }>
                Bid Requests
            </NavLink>
        </li>
    </>

    return (
        <div className="dark:bg-black dark:text-white">
            <div className="navbar md:w-4/5 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <NavLink to="/" className="text-2xl md:text-4xl font-extrabold flex items-center"><img className="w-12 mr-2" src="" alt="" />SkillNest</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-[#ff7700]">
                            <div className="w-10 rounded-full">
                                <img src={"./user-default-pic.svg"} alt="User Profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="dark:text-black mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 border-2 border-[#ff7700] font-bold rounded-box w-52">
                            <li className="border rounded-lg">
                                <a className="justify-between">
                                    {/* {user?.displayName} */}
                                </a>
                            </li>
                            <li className="border rounded-lg"><a>Logout<MdLogout></MdLogout></a></li>
                        </ul>
                    </div>

                    <Link className="btn btn-sm md:btn-md font-bold shadow-md shadow-[#ff7700]" to="/login">
                        Log In / Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;