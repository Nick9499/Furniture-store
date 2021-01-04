import React from 'react'
import './Navbar.css'
import logo from './images/logo.svg'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar_menu">
                <h5>SHOWROOM</h5>
                <h5>PRODUCT</h5>
                <h5>FAQ</h5>
                <h5>
                    <SearchIcon />
                </h5>
                <h5>
                    <ShoppingCartIcon />
                </h5>
            </div>
        </div>
    )
}

export default Navbar
