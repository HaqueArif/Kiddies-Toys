import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'


const NavBar = () => {

    
    
    return (
        <div>
            <div className="navbar bg-[#a5c927]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to="/home">Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>
                            <li> <Link to="/myToys">My Toys</Link></li>
                            <li> <Link to="/addToys">Add A Toy</Link></li>
                            <li> <Link to="/blogs">Blogs</Link></li>
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
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        <li> <Link to="/myToys">My Toys</Link></li>
                        <li> <Link to="/addToys">Add A Toy</Link></li>
                        <li> <Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-10 rounded-full" src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;