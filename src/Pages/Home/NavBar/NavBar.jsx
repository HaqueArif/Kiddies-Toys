import { Link, useLocation } from "react-router-dom";
import logo from '../../../../public/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';


const NavBar = () => {

    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <div>
            <div className="navbar bg-[#a5c927]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className={location.pathname === "/home" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/home">Home</Link></li>
                            <li className={location.pathname === "/home" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}><Link to="/allToys">All Toys</Link></li>
                            <li className={location.pathname === "/home" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/myToys">My Toys</Link></li>
                            <li className={location.pathname === "/home" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/addToys">Add A Toy</Link></li>
                            <li className={location.pathname === "/home" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl">
                        <img className="w-20" src={logo} alt="" />
                        <h2>WONDER TOYS</h2>
                        {/* <Link to="/" className="font-extrabold  normal-case"></Link> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li className={location.pathname === "/home" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}><Link to="/home">Home</Link></li>
                        <li className={location.pathname === "/allToys" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}><Link to="/allToys">All Toys</Link></li>
                        <li className={location.pathname === "/myToys" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/myToys">My Toys</Link></li>
                        <li className={location.pathname === "/addToys" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/addToys">Add A Toy</Link></li>
                        <li className={location.pathname === "/Blogs" ? "bg-white text-[#a5c927] font-bold rounded-lg" : ""}> <Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                {user ?
                            (<div className='flex items-center'>
                                {user.photoURL ? <img
                                    className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2'
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    title={user.displayName}
                                /> : <FaUserCircle className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' title={user.displayName} />}

                                <Link to="/login" onClick={handleLogOut} className="px-5 py-3 rounded-md text-white font-bold bg-orange-400 border-none hidden lg:block ">Logout</Link>
                            </div>) : (<Link to="/login" className="btn border-none bg-orange-400">Login</Link>)}
                </div>
            </div>
        </div>
    );
};

export default NavBar;