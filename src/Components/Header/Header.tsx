import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Shopping cart</a>
                <div className="d-flex align-items-center justify-content-around">
                    <form className="form-inline my-2 my-lg-0 mr-3">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <FaShoppingCart />
                </div>
            </nav >
        </div>
    )
}

export default Header