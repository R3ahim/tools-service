import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
};

    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/review"> Reviews</Link></li>
    <li><Link to="/businessSummery">Profile</Link></li>
    <li><Link to="/blog">Blogs</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>

    </>
    
    return (
        <div class="navbar bg-slate-50 ">
        <div class="navbar-start">
          
          <Link to={'/'} class="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
                        {menuItems}
                        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>


         
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;