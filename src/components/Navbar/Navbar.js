import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
    return(
        <>
            <div className='top-navbar'>
                <i class="fas fa-sliders-h nav-icon"></i>
                <a class="navbar-brand">Your service</a>
                <div class="input-group mb-3">
                    <input className='search-here' type="text" />
                    <i class="fas fa-search search-icon"></i>
                </div>
                <i class="far fa-bell"></i>
                <i class="fas fa-circle"></i>
                <span className='user-name'>Adewumi</span>
            </div>
        </>
    );
}

export default Navbar;