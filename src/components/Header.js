import React from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img  className="logo-img" src={LOGO_URL} alt="Logo-img" />
        </div>
        <div className="nav-items">
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )


}
export default Header;