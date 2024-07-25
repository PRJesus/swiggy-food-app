import React from "react";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img  className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dTxNR_0zHhTPOuAwTwub2XlttD4xLAP9mw&s" alt="Logo-img" />
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