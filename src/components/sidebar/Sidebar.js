import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import Logo from "../../image/Logo.png";

const Sidebar = () => {
    return(
        <>
            <div className='sidebar'>
                <div className='sidebar-brand'>
                    <img src={Logo} className='brand-logo' alt="" />
                    <span className='brand-name'>Credio Books</span>
                </div>
                <div className='create-user'>
                    <span className='create-user-text'>+ Create Users</span>
                </div>
                <ul className='sidebar-menu-items'>
                    <li className='sidebar-menu-item'>
                        <i class="far fa-user"></i>
                        <span className='sidebar-text'>Dashboard</span>
                    </li>
                    <li className='sidebar-menu-item'>
                        <i class="far fa-user"></i>
                        <span className='sidebar-text'>Transactions</span>
                    </li>
                    <li className='sidebar-menu-item'>
                        <i class="far fa-user"></i>
                        <span className='sidebar-text'>Users</span>
                    </li>
                    <li className='sidebar-menu-item'>
                        <i class="far fa-user"></i>
                        <span className='sidebar-text'>Settings</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;