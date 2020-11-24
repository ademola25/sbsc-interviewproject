import React from 'react'
import { push as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

import Logo from '../../../assets/logo.svg'

import './sidebar.css'

const Sidebar = () => {
    return (
        
        <Menu disableAutoFocus>
            <div className="brand-container logo-padding">
                <img src={Logo} alt="logo"/>
            </div>
            <Link className="menu-item" href="/dashboard">
                Dashboard
            </Link>
            <a className="menu-item" href="/salads">
                Menu 1
            </a>
            <a className="menu-item" href="/pizzas">
                Menu 2
            </a>
            <a className="menu-item" href="/desserts">
                Menu 3
            </a>
        </Menu>
    )
}

export default Sidebar
