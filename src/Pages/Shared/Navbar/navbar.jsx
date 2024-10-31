import { Link, NavLink } from "react-router-dom";
import avataronline from "../../../assets/user.png"
import Header from "../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const {user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
      logOut()
      .then((res) =>{
         toast(`Logout Successful`)}
         
      )
      
      .catch(err => toast(`Try Again${err}`))
  }
    const navlinks =<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="avatar online mr-4">
      <div className="w-10 rounded-full">
       
      <Link to="/myaccount"><img src={avataronline}></img></Link> 
       
      </div>
    </div> : ''
    }
{
  user ? 
  <button onClick={handleSignOut} className="btn">Log Out</button>
  :
<Link to="/login" className="btn">
  Login
  </Link>
}

  </div>
</div>
<Toaster/>
        </div>
    );
};

export default Navbar;